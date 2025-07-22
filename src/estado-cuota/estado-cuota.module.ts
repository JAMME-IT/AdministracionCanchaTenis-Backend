import { Module } from '@nestjs/common';
import { EstadoCuotaService } from './estado-cuota.service';
import { EstadoCuotaController } from './estado-cuota.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EstadoCuotaController],
  providers: [EstadoCuotaService,PrismaService],
})
export class EstadoCuotaModule {}
