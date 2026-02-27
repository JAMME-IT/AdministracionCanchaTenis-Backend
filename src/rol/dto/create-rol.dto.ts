import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { Rol } from '../../common/enums/rol.enum';
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
    nombreRol:Rol;
}