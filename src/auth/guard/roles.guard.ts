import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Rol } from 'src/auth/enums/rol.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Rol[]>(ROLES_KEY, [
      //El método getAllAndOverride nos permite obtener el valor de un decorador personalizado llamado "Roles" que se ha aplicado a un controlador.
      context.getHandler(),
      context.getClass(),
    ]);
    
    //console.log('Roles requeridos para acceder a esta ruta:', requiredRoles);

    if (!requiredRoles) {
      //si no se han definido roles requeridos para esta ruta, entonces cualquier usuario autenticado puede acceder a ella
      return true;
    }

    const { user } = context.switchToHttp().getRequest(); //Obtenemos el usuario autenticado del request, que se ha agregado al request por el AuthGuard.
    // Este usuario "user" tiene una propiedad "roles" ( que puede ser "Admin", "Socio", "Invitado").
    
    // Verificamos si el usuario tiene al menos uno de los roles requeridos para acceder a esta ruta
    const tienePermiso = requiredRoles.some(rol => user.roles?.includes(rol)); //el some permite verificar si al menos uno de los roles requeridos (requiredRoles) está incluido en los roles del usuario autenticado (user.roles). Corta con q coincida uno solo, no es necesario que coincidan todos los roles 
    
    if (!tienePermiso) {
      throw new ForbiddenException('No tienes permiso para acceder a esta ruta'); //Error 403 (Prohihido el acceso a esta ruta) 
    }                                                                            //si no pondria este error de todas formas Nestjs se encarga de devolverlo
    
    return tienePermiso; //true (user tiene permiso de acceso a ruta)
  }
}
