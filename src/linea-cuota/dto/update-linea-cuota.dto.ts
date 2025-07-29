import { ApiProperty } from '@nestjs/swagger';
export class UpdateLineaCuotaDto {

  @ApiProperty({ required: true })
  monto: number;

  @ApiProperty({ required: true })
  metodoPago: string;

  @ApiProperty({ required: true })
  idCuota: number;
}
/* import { PartialType } from '@nestjs/mapped-types';
import { CreateLineaCuotaDto } from './create-linea-cuota.dto';

export class UpdateLineaCuotaDto extends PartialType(CreateLineaCuotaDto) {
fechaPago: Date;
monto: number
}
 */