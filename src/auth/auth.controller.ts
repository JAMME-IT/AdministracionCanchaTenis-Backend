import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
//import { AuthGuard } from './guard/auth.guard';
//import { Request } from 'express';
//import { Roles } from './decorators/roles.decorator';
//import { RolesGuard } from './guard/roles.guard';
import { Rol } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger'; // 1. Lo importás
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/active-user.interface';


@ApiBearerAuth() //Indica a swagguer que esta ruta requiere autenticación con Bearer (JWT)
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
  @Auth(Rol.ADMIN, Rol.SOCIO) // Solo los usuarios con el rol 'ADMIN' pueden acceder a esta ruta //Si esta vacio cualquier usuario accede a esta ruta
  profile(@ActiveUser() user:UserActiveInterface) // el request tendrá una propiedad user que contiene el payload del token, que es la información del usuario autenticado (en este caso el email y los roles) {
  {
    return user; //devolvemos la info del perfil del usuario (en este caso el email y los roles)
  }
}
