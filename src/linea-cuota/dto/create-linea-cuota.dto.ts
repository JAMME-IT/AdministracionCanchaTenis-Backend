import { ApiProperty } from '@nestjs/swagger';   /* importamos ApiProperty de swagger */

export class CreateLineaCuotaDto {
  
  @ApiProperty({ required: true })
  fechaPago: Date;

  @ApiProperty({ required: true })
  monto: number;

  @ApiProperty({ required: true })
  metodoPago: string;

  @ApiProperty({ required: true })
  idCuota: number;
}
