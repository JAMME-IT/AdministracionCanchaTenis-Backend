import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCuotaDto } from './dto/create-cuota.dto';
import { UpdateCuotaDto } from './dto/update-cuota.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cuota } from '@prisma/client';

@Injectable()
export class CuotaService {
constructor(private prisma: PrismaService) {}

async createForAllActiveUsers(createCuotaDto: CreateCuotaDto) {
  // 1. Obtener todos los usuarios
  const usuarios = await this.prisma.usuario.findMany();

  if (usuarios.length === 0) {
    throw new NotFoundException('No hay usuarios registrados.');
  }

  //2.Busco el ultimo ValorCuota
  const ultimoValorCuota = await this.prisma.valorCuota.findFirst({
  orderBy: {
    fechaCambio: 'desc'
  },
  }); 

  if (ultimoValorCuota) {

    // 3. Iterar sobre cada usuario y crearle una cuota
    const cuotasCreadas: Cuota[] = []; 

    for (const usuario of usuarios) {
      const newCuota = await this.prisma.cuota.create({
        data: {
          ...createCuotaDto,
          //montoTotal:ultimoValorCuota.precio, esto no se asigna xq el valor cambia en fcion a los pagos de socio
          idValorCuota: ultimoValorCuota.id, //relaciono la tabla valorCuota con cuota (1-*)
          idUsuario: usuario.id,           //relaciono usuario con cuota (1-*)
        },
      });
      cuotasCreadas.push(newCuota);
    }

  }


}


///
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
