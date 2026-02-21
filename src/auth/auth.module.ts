import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwtConstants';
import { RolModule } from 'src/rol/rol.module';

@Module({
  imports: [
    UsuarioModule,  /* 3. Importo el modulo de usuario */
    JwtModule.register({ /* importo el modulo de Jwt */
      global:true,       /* indica que cualquier modulo puede usar el modulo de Jwt */
      secret: jwtConstants.secret, /* palabra secreta usada para verificar que el token generado es valido   */
      signOptions: { expiresIn: '1d' } //el payload del token va a expirar en 1 dia
    }),
    RolModule
  ], 
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
