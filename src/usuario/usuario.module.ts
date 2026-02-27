import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolModule } from '../rol/rol.module';
import { SocioModule } from '../socio/socio.module';

@Module({
  imports: [
    RolModule,  // 👈 Al importar el módulo, Nest inyecta el RolService mágicamente
    SocioModule // 👈 Lo mismo con SocioService
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService],
  exports: [UsuarioService]                   /* 2. exporto para poder UsuarioService usarlo en otros módulos */
})
export class UsuarioModule {}
