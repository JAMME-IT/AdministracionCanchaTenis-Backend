import { PartialType } from '@nestjs/swagger';
import { CreateValorCuotaDto } from './create-valor-cuota.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateValorCuotaDto extends PartialType(CreateValorCuotaDto) {

  @ApiProperty({ required: true })
  precio: number;
}