import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLineaCuotaDto } from './dto/create-linea-cuota.dto';
import { UpdateLineaCuotaDto } from './dto/update-linea-cuota.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LineaCuotaService {
  constructor(private prisma: PrismaService) {}

  async create(createLineaCuotaDto: CreateLineaCuotaDto) {
    const cuota = await this.prisma.cuota.findUnique({
      where: { id: createLineaCuotaDto.idCuota },
    });

    if (!cuota) {
      throw new NotFoundException('No se encontró la cuota especificada');
    }

    const newLineaCuota = await this.prisma.lineaDeCuota.create({
      data: { ...createLineaCuotaDto },
    });

    return newLineaCuota; // IMPORTANTE: retornar el objeto creado
  }

  findAll() {
    return this.prisma.lineaDeCuota.findMany();
  }

  findOne(id: number) {
    return this.prisma.lineaDeCuota.findUnique({ where: { id } });
  }

  async update(id: number, updateLineaCuotaDto: UpdateLineaCuotaDto) {
    const lineaCuota = await this.prisma.lineaDeCuota.findUnique({ where: { id } });
    if (!lineaCuota) {
      throw new NotFoundException('No se encontró la línea de cuota a actualizar');
    }

    return this.prisma.lineaDeCuota.update({
      where: { id },
      data: { ...updateLineaCuotaDto },
    });
  }

  remove(id: number) {
    return this.prisma.lineaDeCuota.delete({ where: { id } });
  }
}
