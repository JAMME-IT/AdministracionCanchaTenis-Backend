import { Module } from '@nestjs/common';
import { EstadoUsuarioService } from './estado-usuario.service';
import { EstadoUsuarioController } from './estado-usuario.controller';

@Module({
  controllers: [EstadoUsuarioController],
  providers: [EstadoUsuarioService],
})
export class EstadoUsuarioModule {}
