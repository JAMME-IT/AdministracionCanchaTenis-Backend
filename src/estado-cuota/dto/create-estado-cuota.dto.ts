import { EstadoValorCuota } from "@prisma/client";

export class CreateEstadoCuotaDto {
    valor:EstadoValorCuota;
    idCuota:number;
}

