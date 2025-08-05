import { BadRequestException, Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()                    
export class AuthService {
    constructor(private readonly usuarioService: UsuarioService) {} /* 4. Inyecto el servicio de Usuario para poder usarlo aqui */

    async register(registerDto:RegisterDto){            /* Metodo register */
        const {nombreUsuario, email, password, nombre, apellido,dni, telefono} = registerDto
        
        const existeUsuario = await this.usuarioService.findOneByNameUser(nombreUsuario)
        
        if (existeUsuario) {
            throw new BadRequestException('El usuario ya existe')
        }

        return await this.usuarioService.create({      /* Llamo al metodo create del servicio de Usuario y le paso el dto*/
            nombreUsuario, 
            email, 
            password: bcrypt.hashSync(password, 10),
            nombre,
            apellido,
            dni,
            telefono}); 
    }

    login(){
        return 'Login'
    }

}
