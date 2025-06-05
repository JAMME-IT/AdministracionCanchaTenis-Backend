import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateValorCuotaDto } from './dto/create-valor-cuota.dto';
import { UpdateValorCuotaDto } from './dto/update-valor-cuota.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ValorCuotaService {
  constructor(private prisma: PrismaService) {}

  async create(createValorCuotaDto: CreateValorCuotaDto) {
    return this.prisma.valorCuota.create({data:createValorCuotaDto});
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
