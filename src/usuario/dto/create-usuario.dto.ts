import { ApiProperty } from '@nestjs/swagger';   /* importamos ApiProperty de swagger */

export class CreateUsuarioDto {

    @ApiProperty({ required: true })
    nombreUsuario: string;

    @ApiProperty({ required: true })
    password: string;

    @ApiProperty({ required: true })
    email: string;

    @ApiProperty({ required: true })
    nombre: string;

    @ApiProperty({ required: true })
    apellido: string;

    
    @ApiProperty({required:true})
    dni:number;
    
    @ApiProperty({required:true})
    telefono:string;
    
/*  fechaCreacion: DateTime @default(now())
    fechaActualizacion: DateTime?
    fechaEliminacion: DateTime? */

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