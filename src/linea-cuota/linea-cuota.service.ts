import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLineaCuotaDto } from './dto/create-linea-cuota.dto';
import { UpdateLineaCuotaDto } from './dto/update-linea-cuota.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LineaCuotaService {
  constructor(private prisma: PrismaService) {}
  
  async create(cuotaId: number, createLineaCuotaDto: CreateLineaCuotaDto) {
    const cuota = await this.prisma.cuota.findUnique({
      where: {id: cuotaId}})
    
      if (!cuota) {
      throw new NotFoundException('No se encontró la cuota especificada');      
  }
    const newLineaCuota = await this.prisma.lineaDeCuota.create({
      data:{
        ...createLineaCuotaDto,
        idCuota: cuotaId
      }
    });  
  }

  findAll() {
    return this.prisma.lineaDeCuota.findMany();
  }

  findOne(id: number) {
    return this.prisma.lineaDeCuota.findUnique({ where: { id } });
  }

  /* async findLineaCuotaByCuotaId(cuotaId: number) {
  const lineaCuota = await this.prisma.lineaDeCuota.findMany({
    where: {
      idCuota: cuotaId
    },
  });
  if (!lineaCuota) {
    throw new NotFoundException('No se encontró la línea de cuota para la cuota especificada');
  }
  return 
    lineaCuota;
}  */

  update(id: number, updateLineaCuotaDto: UpdateLineaCuotaDto) {
    return this.update(id, updateLineaCuotaDto);
  }

  remove(id: number) {
    return this.prisma.lineaDeCuota.delete({ where: { id } });
  }
}
