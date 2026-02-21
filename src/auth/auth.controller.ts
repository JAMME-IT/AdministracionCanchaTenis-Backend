import { Body, Controller,Get,Post, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){} /* 1. Inyecto el servicio de Auth */

    @Post('register')
    register(
        @Body() 
        registerDto: RegisterDto,
    ){
        return this.authService.register(registerDto)
    }

    @Post('login')
    login(
        @Body()
        loginDto: LoginDto

    ) {
        return this.authService.login(loginDto)
    }

    @Get('profile')
    @UseGuards(AuthGuard) // protejo la ruta con el guard de autenticación
    profile(
        @Request() req: Request &{ user: { email: string } },  // el request tendrá una propiedad user que contiene el payload del token, que es la información del usuario autenticado (en este caso el email) {
        ){    
            return req.user;  //devolvemos la info del perfil del usuario (en este caso el email)
    }
}
