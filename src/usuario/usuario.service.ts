import {  Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {               
  constructor(private prisma: PrismaService) {} /* 0. en el servicio UsuarioService se inyecta el servicio PrismaService para interactuar con la base de datos */

  // Crear usuario
  async create(createUsuarioDto: CreateUsuarioDto) {
      return this.prisma.usuario.create({data:createUsuarioDto});
    
  }

  findOneByNameUser(nombreUsuario: string) { /* Encontrar 1 usuario por nombre */
    return this.prisma.usuario.findUnique({
      where: {
            nombreUsuario: nombreUsuario
    }
  });
}


// Encontrar todos los usuarios
  async findAll() {
    return this.prisma.usuario.findMany()
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
}

