import { Module } from '@nestjs/common';
import { CuotaModule } from './cuota/cuota.module';
import { LineaCuotaModule } from './linea-cuota/linea-cuota.module';
import { ValorCuotaModule } from './valor-cuota/valor-cuota.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [CuotaModule, LineaCuotaModule, ValorCuotaModule, UsuarioModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
