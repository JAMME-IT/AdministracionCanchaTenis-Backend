import { SetMetadata } from '@nestjs/common';
import { Rol } from '../../common/enums/rol.enum'; // Importamos el enum de roles para usarlo en el decorador

// Esta es la llave secreta que usaremos para guardar los roles en la "memoria" de NestJS
export const ROLES_KEY = 'roles';

// Este es el decorador @Roles('Admin', 'Socio' , 'Invitado') que pondremos arriba de las rutas
export const Roles = (...roles: Rol[]) => SetMetadata(ROLES_KEY, roles);

