import { ApiProperty } from '@nestjs/swagger';  

export class CreateCuotaDto {

@ApiProperty({ required: true })
fechaInicio:Date;

@ApiProperty({ required: true })
fechaVencimiento: Date;
}

