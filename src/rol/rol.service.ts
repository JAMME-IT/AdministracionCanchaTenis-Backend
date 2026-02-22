import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRolDto } from './dto/create-rol.dto';
@Injectable()
export class RolService {
  constructor(private prisma: PrismaService) {}


  // 1. Obtener todos los roles base (Para mostrarlos en un select en el frontend)
  async findAll() {
    return this.prisma.rol.findMany();
  }


// 2. Asignar un rol a un usuario en la tabla intermedia
  async asignarRolAUsuario(createRolDto: CreateRolDto) {
    
    const { idUsuario, idRol } = createRolDto;
// A. Verificamos si el usuario ya tiene ese rol asignado actualmente
    const rolExistente = await this.prisma.usuarioRol.findUnique({
      where: {
        idUsuario_idRol: {       //De esta forma Prisma junta las "claves compuestas"
          idUsuario: idUsuario,
          idRol: idRol,
        },
      },
    });
if (rolExistente) {
      throw new BadRequestException('El usuario ya tiene asignado este rol');
    }
// B. Creamos el registro en la tabla intermedia
    return this.prisma.usuarioRol.create({
      data: {
        idUsuario,
        idRol,
        // fechaInicio se completa sola por el @default(now()) de tu esquema
      },
    });
  }

  //3.Buscar un rol por ID de Usuario (ya que usuarioRol tiene el idUsuario, podemos buscar los roles asignados a ese usuario)
  async obtenerRolesDeUsuario(idUsuario: number): Promise<string[]> { 

    
    const relaciones = await this.prisma.usuarioRol.findMany({ //aca buscamos en la tabla intermedia usuarioRol todas las relaciones que tengan el idUsuario que nos pasan por parámetro para extraer los roles asignados a ese usuario
      where: {
        idUsuario: idUsuario
      },
      include: {
        rol: true // Aquí el include está perfecto porque estamos dentro del dominio de Roles
      }
    });

    // Extraemos solo los nombres de los roles yretornamos un array de strings de roles
    return relaciones.map(relacion => relacion.rol.nombre);
  }


}

