import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolService } from '../rol/rol.service';
import { SocioService } from '../socio/socio.service';
import { Rol } from '../common/enums/rol.enum';

@Injectable()
export class UsuarioService {
  constructor(
    private prisma: PrismaService /* 0. en el servicio UsuarioService se inyecta el servicio PrismaService para interactuar con la base de datos */,
    private rolService: RolService, // Inyectamos el especialista en roles
    private socioService: SocioService // Inyectamos el especialista en socios
  ) {}

  // Crear usuario
  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuario.create({ data: createUsuarioDto });
  }

  // Encontrar todos los usuarios
  async findAll() {
    return this.prisma.usuario.findMany();
  }

  // Encontrar 1 usuario por ID
  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    return usuario;
  }

  // Encontrar todos los usuarios por nombre (muestra una lista de nombres que coinciden)

  /* async findAllByNombre(nombre: string) {
  const usuarios = await this.prisma.usuario.findMany({
    where: {
      nombre: {
        contains: nombre,
      },
    },
  });
  if (usuarios.length === 0) {
    throw new NotFoundException('No se encontraron usuarios con ese nombre');
  }
  return usuarios;
} */

  //Actualizar cosas de user
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  //Eliminar user
  async remove(id: number) {
    return await this.prisma.usuario.delete({ where: { id } });
  }

  /*Este servicio no tiene un endpoint expuesto en controller xq lo usa auth.service */
  findOneByEmail(email: string) {
    /* Encontrar 1 usuario por email */
    return this.prisma.usuario.findUnique({
      where: {
        email: email,
      },
    });
  }

  //Metodo para ascender a socio (actualiza el campo esSocio a true)
  async cambiarASocio(idUsuario: number) {
    const rolesActuales = await this.rolService.obtenerRolesActuales(idUsuario); //retorna nombreRol

    if (rolesActuales.includes(Rol.SOCIO)) {
      throw new ConflictException('El usuario ya es un Socio activo.'); // Corta la ejecución acá mismo
    }

    // Abrimos la transacción y pasamos el 'tx'.Esta tx es por si algo falla algo hacer rollback en la base de datos
    return this.prisma.$transaction(async tx => {

      // 1. El RolService se encarga de cerrar el rol viejo de Invitado
      await this.rolService.finalizarUnRolActual(idUsuario, Rol.INVITADO, tx);

      // 2. El RolService se encarga de asignar el rol nuevo
      await this.rolService.asignarNuevoRol(idUsuario, Rol.SOCIO, tx);

      //3. chekeo si antes no fue socio para no crearle otro perfil de socio, sino reactivar el que ya tenia
      const perfilSocioExiste = await this.socioService.verificarSiFueSocio(idUsuario);

      if (perfilSocioExiste) {
        await this.socioService.reactivarPerfilSocio(idUsuario, tx);
      }
      // 4. Se encarga de emitir el carnet
      else {
        await this.socioService.crearPerfilSocio(idUsuario, tx);
      }

      return { mensaje: 'El usuario ha sido promovido a socio.' };
    });
  }

  //Metodo para cambiar a admin (actualiza el rol a admin)
  async cambiarAAdmin(idUsuario: number) {
    const rolesActuales = await this.rolService.obtenerRolesActuales(idUsuario); //retorna nombreRol

    if (rolesActuales.includes(Rol.ADMIN)) {
      throw new ConflictException('El usuario ya es un Admin activo.'); // Corta la ejecución acá mismo
    }

    // Abrimos la transacción y pasamos el 'tx' a los especialistas
    return this.prisma.$transaction(async tx => {
      // 1. El RolService se encarga de cerrar el rol viejo de Invitado (un user puede ser admin y socio)
      await this.rolService.finalizarUnRolActual(idUsuario, Rol.INVITADO, tx);

      // 2. El RolService se encarga de asignar el rol nuevo
      await this.rolService.asignarNuevoRol(idUsuario, Rol.ADMIN, tx);

      return { mensaje: 'El usuario ha sido promovido a administrador.' };
    });
  }

  //Metodo para cambiar a invitado (actualiza el rol a invitado) y si el user era socio, elimina el perfil de socio dejando el estado inactivo de socio
  async cambiarAInvitado(idUsuario: number) {
    const rolesActuales = await this.rolService.obtenerRolesActuales(idUsuario); //retorna nombreRol

    if (rolesActuales.includes(Rol.INVITADO)) {
      throw new ConflictException('El usuario ya es un Invitado activo.'); // Corta la ejecución acá mismo
    }
      // Abrimos la transacción y pasamos el 'tx' a los especialistas
    return this.prisma.$transaction(async tx => {
      // 1. El RolService se encarga de cerrar el rol viejo (puede ser socio o admin)
      if (rolesActuales.includes(Rol.SOCIO)) {
        await this.rolService.finalizarUnRolActual(idUsuario, Rol.SOCIO, tx);
        await this.socioService.desactivarPerfilSocio(idUsuario, tx); // Si era socio, desactivamos su perfil de socio
      }

      // 2. El RolService se encarga de cerrar el rol de admin
      if (rolesActuales.includes(Rol.ADMIN)) {
        await this.rolService.finalizarUnRolActual(idUsuario, Rol.ADMIN, tx);
      }

      // 3. El RolService se encarga de asignar el rol nuevo de invitado
      await this.rolService.asignarNuevoRol(idUsuario, Rol.INVITADO, tx);

      return { mensaje: 'El usuario ha sido promovido a invitado.' };

    });
  }




}
