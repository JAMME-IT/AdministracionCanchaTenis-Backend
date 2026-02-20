import { ApiProperty } from '@nestjs/swagger';   /* importamos ApiProperty de swagger */
import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, Max, MaxLength, Min, MinLength} from 'class-validator'; 
import { Type } from 'class-transformer';

export class CreateUsuarioDto {

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @MaxLength(30)
    nombreUsuario: string;

    @ApiProperty({ required: true })
    @MaxLength(20)
    password: string;

    @ApiProperty({ required: true })
    @IsEmail()
    email: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    nombre: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    apellido: string;

    @ApiProperty({required:true})
    @Type(() => Number)           /* convertimos a number */
    
    @IsInt()                      /* validaciones*/
    @IsPositive()
    @Min(10000000)
    @Max(99999999)               /* se debe respetar ese rango de valores numericos(de 8 caracteres para el DNI) */
    dni:number;
    
    @ApiProperty({required:true})
    @IsString()
    @MinLength(12)      /* 543445415643   en front "+"" 54 "0" 3445415643*/
    telefono:string;

}


/* model Usuario {
  id Int     @id @default(autoincrement())
  nombreUsuario    String  @db.VarChar(100) @unique
  password  String  @db.VarChar(100)
  email     String  @db.VarChar(100)
  nombre String  @db.VarChar(100) 
  apellido String  @db.VarChar(100) 
  dni Int 
  telefono  String  @db.VarChar(50)
  fechaCreacion DateTime @default(now())
  fechaActualizacion DateTime?
  fechaEliminacion DateTime?
  cuota Cuota[]
  estadoUsuario EstadoUsuario[]
  UsuarioRol UsuarioRol[]
  Socio Socio[]
} */