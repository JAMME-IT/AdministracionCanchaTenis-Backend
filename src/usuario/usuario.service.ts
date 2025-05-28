import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  // Crear usuario
  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuario.create({ data: createUsuarioDto });
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

async findAllByNombre(nombre: string) {
  const usuarios = await this.prisma.usuario.findMany({
    where: {
      nombre: {
        contains: nombre,
        // mode: 'insensitive',
      },
    },
  });
  if (usuarios.length === 0) {
    throw new NotFoundException('No se encontraron usuarios con ese nombre');
  }
  return usuarios;
}


// actualizar usuario por ID
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      return await this.prisma.usuario.update({
        where: { id },
        data: updateUsuarioDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Usuario no encontrado');
      }
      throw error;
    }
  }

  // eliminar usuario 
  async remove(id: number) {
    try {
      return await this.prisma.usuario.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Usuario no encontrado');
      }
      throw error;
    }
  }
}
