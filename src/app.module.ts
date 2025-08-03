import { App } from 'supertest/types';
import { Module } from '@nestjs/common';
import { CuotaModule } from './cuota/cuota.module';
import { LineaCuotaModule } from './linea-cuota/linea-cuota.module';
import { ValorCuotaModule } from './valor-cuota/valor-cuota.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PrismaModule } from './prisma/prisma.module';
import { EstadoCuotaModule } from './estado-cuota/estado-cuota.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CuotaModule, LineaCuotaModule, ValorCuotaModule, UsuarioModule, PrismaModule, EstadoCuotaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
