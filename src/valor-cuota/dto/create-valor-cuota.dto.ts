import { ApiProperty } from '@nestjs/swagger';  

export class CreateValorCuotaDto {

    @ApiProperty({ required: true })
    precio: number;

}
