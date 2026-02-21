import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';
export class CreateRolDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    idUsuario: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    idRol: number; //id= 1 para Admin, id=2 para Socio, id=3 para Invitado
}
