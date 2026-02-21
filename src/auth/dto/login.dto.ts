import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MaxLength } from "class-validator";

export class LoginDto{

    @ApiProperty({ required: true })
    @IsEmail()
    @MaxLength(30)
    email: string;

    @ApiProperty({ required: true })
    @IsString()
    @MaxLength(30)
    password: string;
    
}