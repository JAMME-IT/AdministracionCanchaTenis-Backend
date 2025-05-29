import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCuotaDto } from './dto/create-cuota.dto';
import { UpdateCuotaDto } from './dto/update-cuota.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CuotaService {
constructor(private prisma: PrismaService) {}

async create(idUsuario: number, createCuotaDto: CreateCuotaDto) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: idUsuario },
    });
    if (!usuario) {
      throw new NotFoundException(`No se encontró el usuario con ID ${idUsuario} para asociar la cuota.`);
    }
    const newCuota = await this.prisma.cuota.create({
      data: {
        ...createCuotaDto,
        idUsuario: idUsuario,
      }
    }) 
  }

  findAll() {
    return this.prisma.cuota.findMany();
  } 

async findCuotaByPersona(nameUser: string) {    
    const usuario = await this.prisma.usuario.findUnique({
      where: { nombreUsuario: nameUser },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con nombre "${nameUser}" no encontrado`);
    }

    const cuotas = await this.prisma.cuota.findMany({
      where: { idUsuario: usuario.id},
      orderBy: { id: 'asc' },
    });

    return {  
      nameUser: usuario.nombreUsuario,
      cuotas,
    };
}

  findOne(id: number) {
    return this.prisma.cuota.findUnique({ where: { id } });
  }

  update(id: number, updateCuotaDto: UpdateCuotaDto) {
    return this.prisma.cuota.update({ where: { id }, data: updateCuotaDto });
  }

  remove(id: number) {
    return this.prisma.cuota.delete({ where: { id } });
  }
}
