import { ApiProperty } from '@nestjs/swagger';   

export class GetUsuarioDto {

    @ApiProperty({ required: true })
    email: string;

    @ApiProperty({ required: true })
    nombre: string;

    @ApiProperty({ required: true })
    apellido: string;

    @ApiProperty({ required: true })
    telefono: string;

    @ApiProperty({required:true})
    dni:number;

    /* 
    
    
    @ApiProperty({required:true})
    telefono:string;
    fechaCreacion: DateTime @default(now())
    fechaActualizacion: DateTime?
    fechaEliminacion: DateTime?
     */
}
