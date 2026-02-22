import { BadRequestException, Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import {JwtService} from '@nestjs/jwt';
import { RolService } from 'src/rol/rol.service';

@Injectable()                    
export class AuthService {
    constructor(
        private readonly usuarioService: UsuarioService, /* Inyecto el servicio de Usuario para poder usarlo aqui */
        private readonly jwtService: JwtService,         /* Inyecto el servicio de Jwt */
        private readonly rolService: RolService /* 1. Inyectamos el servicio de Rol aquí */
    ) {} 

    async register(registerDto:RegisterDto){            /* Metodo register */
        const {email, password, nombre, apellido,dni, telefono} = registerDto
        
        const existeUsuario = await this.usuarioService.findOneByEmail(email) //esto trae el usuario de la base de datos
        
        if (existeUsuario) {
            throw new BadRequestException('El usuario ya existe')
        }

        const nuevoUsuario = await this.usuarioService.create({      /* Llamo al metodo create del servicio de Usuario y le paso el dto*/
            email, 
            password: bcrypt.hashSync(password, 10),
            nombre,
            apellido,
            dni,
            telefono}); 

        
        //const rolInvitado = await this.rolService.findOne(3); // Busca el rol de "Invitado" en la base de datos (crear este metodo de querer usarlo)
        
        /* 3. Usamos el RolService para asignarle el rol 'Invitado' automáticamente.
           Asumimos que el ID 3 corresponde a 'Invitado' según el orden de tu base de datos */
        const rolAsignado =  await this.rolService.asignarRolAUsuario({ 
            idUsuario: nuevoUsuario.id, 
            idRol: 3 }); // Asigna el rol de "Invitado" al usuario recién creado   // rolInvitado.id 
        
        //retorno usuario con rol
        return {                   /* esto mas adelante lo deberia comentar porque no es necesario retornar */
            nuevoUsuario,
            rolAsignado
        }
    }

    async login({email, password}:LoginDto){
        const existeUsuario = await this.usuarioService.findOneByEmail(email)

        if (!existeUsuario) {
            throw new UnauthorizedException('El usuario no existe') 
        }

        const isPasswordValid = bcrypt.compareSync(password, existeUsuario.password) // compara la contraseña ingresada con la contraseña almacenada en la base de datos (que está hasheada)

        if (!isPasswordValid) {
            throw new UnauthorizedException('La contraseña es incorrecta')
        } 
        
        const rolesDelUsuario = await this.rolService.obtenerRolesDeUsuario(existeUsuario.id); // Obtiene los roles(array) asignados al usuario 

        const payload = {            /// payload es la información que guardara el token (mail y los roles del usuario), para poder acceder a esa información en las rutas protegidas por el guard de autenticación.
            email: existeUsuario.email,
            roles: rolesDelUsuario 
        }

        const token = this.jwtService.sign(payload) // genero el token con el payload

        return {         /* esto mas adelante lo deberia comentar porque no es necesario retornar */
            token,
            email
        }
    }

    

}
