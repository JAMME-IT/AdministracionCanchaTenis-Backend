import { EstadoValorCuota } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';  

export class CreateEstadoCuotaDto {

    @ApiProperty({ required: true })
    valor:EstadoValorCuota;
    
    @ApiProperty({ required: true })
    idCuota:number;
}

