import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class RegisterDto{

    @ApiProperty({ required: true })
    @IsEmail()
    @MaxLength(30)
    email: string;

    @ApiProperty({ required: true })
    @Transform(({ value }) => value.trim()) /* Quita los espacios en blanco , por si un forro pone todo espacios en blanco en la password*/
    @IsString()
    @MaxLength(30)
    password: string;

    @ApiProperty({ required: true })
    /* otros */
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    nombre: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    apellido: string;

    @ApiProperty({ required: true })
    @Type(() => Number)           /* convertimos a number */
    @IsInt()                      /* validaciones*/
    @IsPositive()
    @Min(20000000)
    @Max(90000000)               /* se debe respetar ese rango de valores numericos(de 8 caracteres para el DNI) */
    dni:number;
    
    @ApiProperty({ required: true })
    @IsString()
    @MinLength(12)      /* 543445415643   en front "+"" 54 "0" 3445415643*/
    telefono:string;
    
}