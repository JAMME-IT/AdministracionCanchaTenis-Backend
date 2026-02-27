import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma , Rol as RolEntity} from '@prisma/client';
import { Rol } from 'src/common/enums/rol.enum';
import { CreateRolDto } from './dto/create-rol.dto';

@Injectable()
export class RolService {
  constructor(private prisma: PrismaService) {}

  // 0. Obtener todos los roles base (Para mostrarlos en un select en el frontend)
  async findAll() {
    return this.prisma.rol.findMany();
  }

  // 1.Obtener rol por nombre (para validar que el rol que me pasan existe en la base de datos)
  async findOne(nombreRol: Rol){
    
    const rol = await this.prisma.rol.findFirst({
      where: { nombre: nombreRol },
    });
    
    return this.validateRol(rol);
    }
    
  // 2. Asignar un rol a un usuario (de momento para el auth (este se usa sin tx - transaction xq no hace falta)
  async asignarRolAUsuario(createRolDto: CreateRolDto) {
    //TRAER IDusuario del payload, no del dto

    const { idUsuario, nombreRol } = createRolDto;

    //A. Primero, obtenemos el ID del rol a partir del nombre
    const rol = await this.findOne(nombreRol);

    if (!rol) throw new BadRequestException(`Rol ${nombreRol} no encontrado`);

    // B. Creamos el registro en la tabla intermedia
    return this.prisma.usuarioRol.create({
      data: {
        idUsuario,
        idRol: rol.id,
        // fechaInicio se completa sola por el @default(now()) de tu esquema
      },
    });
  }

  //3.Obtener un rol/es de un Usuario con sus datos
  async obtenerRolesDeUsuario(idUsuario: number): Promise<string[]> {
    const relaciones = await this.prisma.usuarioRol.findMany({
      //aca buscamos en la tabla intermedia usuarioRol todas las relaciones que tengan el idUsuario que nos pasan por parámetro para extraer los roles asignados a ese usuario
      where: {
        idUsuario: idUsuario,
        fechaFin: null, // EL SECRETO: Si no tiene fecha de fin, es el actual
      },
      include: {
        rol: true, // Aquí el include está perfecto porque estamos dentro del dominio de Roles
      },
    });

    // Extraemos solo los nombres de los roles yretornamos un array de strings de roles
    return relaciones.map(relacion => relacion.rol.nombre);
  }

  /* ---------------- Requerimiento: Admin Asigna Roles -----------------*/

  //4. Obtener solo los roles actuales de un Usuario
  async obtenerRolesActuales(idUsuario: number): Promise<Rol[]> {
    // a. Buscamos la relación activa en la tabla intermedia
    const rolesActuales = await this.prisma.usuarioRol.findMany({
      where: {
        idUsuario: idUsuario,
        fechaFin: null, // EL SECRETO: Si no tiene fecha de fin, es el actual
      },
      include: {
        rol: true, //  Hacemos el JOIN con la tabla Rol para traernos el nombre
      },
    });

    // b. Seguridad extrema: esto es para el caso (improbable) de que haya un usuario sin ningún rol activo. No debería pasar, pero mejor prevenir que curar.
    if (!rolesActuales || rolesActuales.length === 0) {
      throw new NotFoundException(
        `El usuario con ID ${idUsuario} no tiene ningún rol activo en el sistema.`
      );
    }

    // c. Devolvemos el nombre del rol.
    // Como prometimos devolver un Rol[] (que es un enum), hacemos un pequeño truco de casting para que TypeScript no se queje.
    return rolesActuales.map(relacion => relacion.rol.nombre as Rol); // Si el nombre en la base de datos coincide exactamente con los valores del enum, esto es seguro. Si no, habría que hacer un mapeo manual.

    //si era Promise<string[]> se hace return relacionActiva.rol.nombre sin el casteo xq es un array con strings comun
  }

  //5.Actualiza el rol actual para ponerle fechaFin (inactivo)
  async finalizarUnRolActual(
    idUsuario: number,
    nombreRol: Rol,
    tx?: Prisma.TransactionClient
  ) {
    const db = tx || this.prisma; //  Usamos el cliente normal, O el transaccional si nos lo pasan

    //Obtenemos el ID del rol a partir del nombre
    const rol = await this.findOne(nombreRol);

    // Buscamos la relación activa del rol que queremos finalizar en la tabla intermedia
    const relacion = await db.usuarioRol.findFirst({
      where: { idUsuario, idRol: rol.id, fechaFin: null },
    });

    //Si existe esa relación activa, le ponemos fechaFin para marcarla como inactiva.
    if (relacion) {
      await db.usuarioRol.update({
        where: { idUsuario_idRol: { idUsuario, idRol: rol.id } },
        data: { fechaFin: new Date() },
      });
    }
  }

  // Asignar un rol a un usuario
  async asignarNuevoRol(
    idUsuario: number,
    nombreRol: Rol,
    tx?: Prisma.TransactionClient
  ) {
    const db = tx || this.prisma;

    //Obtenemos el ID del rol a partir del nombre
    const rol = await this.findOne(nombreRol);

    // Creamos el registro en la tabla intermedia para asignar el nuevo rol
    return db.usuarioRol.create({
      data: {
        idUsuario,
        idRol: rol.id,
      },
    });
  }

  //metodo privado para validar rol
    private validateRol(rol: RolEntity | null): RolEntity {          //es un existeRol
      
        if (!rol) 
          throw new BadRequestException(`Rol ${rol} no encontrado`);
        
        return rol;
    }


}
