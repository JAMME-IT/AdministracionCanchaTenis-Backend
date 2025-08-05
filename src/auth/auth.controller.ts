import { Body, Controller,Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){} /* 1. Inyecto el servicio de Auth */

    @Post('register')
    register(
        @Body() registerDto: RegisterDto,
    ){
        return this.authService.register(registerDto)
    }

    @Post('login')
    login(){
        return this.authService.login()
    }


}
