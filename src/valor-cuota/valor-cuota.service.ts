import { Injectable } from '@nestjs/common';
import { CreateValorCuotaDto } from './dto/create-valor-cuota.dto';
import { UpdateValorCuotaDto } from './dto/update-valor-cuota.dto';

@Injectable()
export class ValorCuotaService {
  create(createValorCuotaDto: CreateValorCuotaDto) {
    return 'This action adds a new valorCuota';
  }

  findAll() {
    return `This action returns all valorCuota`;
  }

  findOne(id: number) {
    return `This action returns a #${id} valorCuota`;
  }

  update(id: number, updateValorCuotaDto: UpdateValorCuotaDto) {
    return `This action updates a #${id} valorCuota`;
  }

  remove(id: number) {
    return `This action removes a #${id} valorCuota`;
  }
}
