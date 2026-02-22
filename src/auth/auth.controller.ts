import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
//import { Roles } from './decorators/roles.decorator';
//import { RolesGuard } from './guard/roles.guard';
import { Rol } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorator';

//Interfaz Para que el request que nos llega en el controlador tenga una propiedad user con la información del usuario autenticado (email y roles) que se obtiene del payload del token,
interface RequestWithUser extends Request {
  user: {
    email: string;
    roles: string[];
  };
}

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {} /* 1. Inyecto el servicio de Auth */

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto
  ) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto
  ) {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @Auth(Rol.ADMIN) // Solo los usuarios con el rol 'ADMIN' pueden acceder a esta ruta //Si esta vacio cualquier usuario accede a esta ruta
  profile(
    @Req() req: RequestWithUser // el request tendrá una propiedad user que contiene el payload del token, que es la información del usuario autenticado (en este caso el email y los roles) {
  ) {
    return req.user; //devolvemos la info del perfil del usuario (en este caso el email)
  }
}
