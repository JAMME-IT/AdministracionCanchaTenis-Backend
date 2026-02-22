import { applyDecorators, UseGuards } from '@nestjs/common';
import { Rol } from '../enums/rol.enum';
import { AuthGuard } from '../guard/auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from './roles.decorator';

//Uso decorador compuesto: 
//Permite Aplicar el guardia de autenticación y el guardia de roles a la ruta en un solo decorador
//ademas tambien permite componer el decorador de @Roles('Admin', 'Socio' , 'Invitado')
//tomando de entrada el valor del rol.

export function Auth(rol: Rol) {
  return applyDecorators(Roles(rol), UseGuards(AuthGuard, RolesGuard)); 
}


//PD: Si no quisiera usar esto simplemente utilizo @UseGuards(AuthGuard, RolesGuard) en cada ruta
//y borro el decorador compuesto.