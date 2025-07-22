/* import { EstadoCuota } from './entities/estado-cuota.entity'; */
import { Injectable } from '@nestjs/common';
import { CreateEstadoCuotaDto } from './dto/create-estado-cuota.dto';
import { UpdateEstadoCuotaDto } from './dto/update-estado-cuota.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()

export class EstadoCuotaService {

  constructor(private prisma: PrismaService) {}

  create(createEstadoCuotaDto: CreateEstadoCuotaDto) {
    return this.prisma.estadoCuota.create({data:createEstadoCuotaDto});;
  }

  findAll() {
    return `This action returns all estadoCuota`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoCuota`;
  }

  update(id: number, updateEstadoCuotaDto: UpdateEstadoCuotaDto) {
    return `This action updates a #${id} estadoCuota`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoCuota`;
  }
}
