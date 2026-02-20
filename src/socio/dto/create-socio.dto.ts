import { ApiProperty } from '@nestjs/swagger';   /* importamos ApiProperty de swagger */
import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, Max, MaxLength, Min, MinLength} from 'class-validator'; 
import { Type } from 'class-transformer';

export class CreateSocioDto {

    @ApiProperty({ required: true })
    fechaAlta: Date;

    @ApiProperty({ required: true })
    fechaBaja: Date;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @MaxLength(30)
    estado: string; // ACTIVO, INACTIVO

}
