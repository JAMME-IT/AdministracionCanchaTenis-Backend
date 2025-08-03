import { ApiProperty } from '@nestjs/swagger';   /* importamos ApiProperty de swagger */
import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, MinLength} from 'class-validator'; 

export class CreateUsuarioDto {

    @ApiProperty({ required: true })
    @IsNotEmpty()
    nombreUsuario: string;

    @ApiProperty({ required: true })
    @MinLength(6)
    password: string;

    @ApiProperty({ required: true })
    @IsEmail()
    email: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    apellido: string;

    
    @ApiProperty({required:true})
    @IsInt()
    @IsPositive()
    @MinLength(8)
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