import { IsEmail, IsString, MaxLength } from "class-validator";

export class loginDto{

    @IsString()
    @MaxLength(30)
    nombreUsuario: string;

    @IsEmail()
    @MaxLength(30)
    email: string;

    @IsString()
    @MaxLength(30)
    password: string;
    
}