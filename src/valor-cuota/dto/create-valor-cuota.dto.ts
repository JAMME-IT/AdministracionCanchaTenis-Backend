import { ApiProperty } from '@nestjs/swagger'; 
import { IsNumber, IsPositive } from 'class-validator';  


// export class CreateValorCuotaDto {

//     @ApiProperty({ required: true })
//     precio: number;

// }

export class CreateValorCuotaDto {
  @ApiProperty({ required: true })
  @IsNumber()
  @IsPositive()
  precio: number;
}