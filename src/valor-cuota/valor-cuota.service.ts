import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateValorCuotaDto } from './dto/create-valor-cuota.dto';
import { UpdateValorCuotaDto } from './dto/update-valor-cuota.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ValorCuotaService {
  constructor(private prisma: PrismaService) {}
async create(cuotaId: number, createValorCuotaDto: CreateValorCuotaDto) {
  // Primero verifico que exista la cuota con el id dado
  const cuota = await this.prisma.cuota.findUnique({
    where: { id: cuotaId },
  });

  if (!cuota) {
    throw new NotFoundException('No se encontró la cuota especificada');
  }
  const newLinea = await this.prisma.valorCuota.create({
    data: {
      ...createValorCuotaDto,
      idCuota: cuotaId, 
    },
  });
}

  findAll() {
    return this.prisma.valorCuota.findMany();
  }

  findOne(id: number) {
    return this.prisma.valorCuota.findUnique({ where: { id } });
  }

  update(id: number, updateValorCuotaDto: UpdateValorCuotaDto) {
    return this.prisma.valorCuota.update({ where: { id }, data: updateValorCuotaDto });
  }

  remove(id: number) {
    return  this.prisma.valorCuota.delete({ where: { id } });
  }
}
