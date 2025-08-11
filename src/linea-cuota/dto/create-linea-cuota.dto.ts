import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLineaCuotaDto {

  @ApiProperty({ required: true, type: String, format: 'date' })
  @Type(() => Date)                 // convierte string a Date automáticamente
  @IsDate()                        // valida que sea fecha
  fechaPago: Date;

  @ApiProperty({ required: true })
  @IsNumber()
  monto: number;

  @ApiProperty({ required: true })
  @IsString()
  metodoPago: string;

  @ApiProperty({ required: true })
  @IsNumber()
  idCuota: number;
}
