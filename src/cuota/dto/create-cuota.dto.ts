import { ApiProperty } from '@nestjs/swagger';  
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class CreateCuotaDto {

  @ApiProperty({ required: true })
  @Type(() => Date)
  @IsDate()
  fechaInicio: Date;

  @ApiProperty({ required: true })
  @Type(() => Date)
  @IsDate()
  fechaVencimiento: Date;
}
