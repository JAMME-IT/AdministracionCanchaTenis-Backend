import {CanActivate,ExecutionContext,Injectable,UnauthorizedException} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants/jwtConstants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService //Inyectamos el servicio de JWT para poder verificar el token que nos llega en el header de la petición, y así poder validar si el usuario está autenticado o no.
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest(); //Sirve para obtener el request que nos hace el cliente, y así poder acceder a sus headers, body, etc.En este caso para acceder a los headers y verificar el token de autenticación.
    //console.log(request.headers.authorization);

    const token = this.extractTokenFromHeader(request); //llamamos al metodo privado q extrae el token del header
    //console.log(token);

    if (!token) {                          //verifica si existe token
      throw new UnauthorizedException('');
    }

    try {
      const payload = await this.jwtService.verifyAsync( //verificamos el token con el servicio de JWT, y si es válido, obtenemos el payload que contiene la información del usuario autenticado.
        token, 
        {
          secret: jwtConstants.secret,
        }
      );
      request.user = payload; //El request tendra una propiedad nueva llamada user que contendrá el payload del token, que es la información del usuario autenticado. Esto nos permitirá acceder a esa información en los controladores y servicios que estén protegidos por este guard.
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
