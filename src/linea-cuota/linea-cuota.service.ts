import { Injectable } from '@nestjs/common';
import { CreateLineaCuotaDto } from './dto/create-linea-cuota.dto';
import { UpdateLineaCuotaDto } from './dto/update-linea-cuota.dto';

@Injectable()
export class LineaCuotaService {
  create(createLineaCuotaDto: CreateLineaCuotaDto) {
    return 'This action adds a new lineaCuota';
  }

  findAll() {
    return `This action returns all lineaCuota`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineaCuota`;
  }

  update(id: number, updateLineaCuotaDto: UpdateLineaCuotaDto) {
    return `This action updates a #${id} lineaCuota`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineaCuota`;
  }
}
