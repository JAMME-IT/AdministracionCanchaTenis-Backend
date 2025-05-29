import { Module } from '@nestjs/common';
import { ValorCuotaService } from './valor-cuota.service';
import { ValorCuotaController } from './valor-cuota.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ValorCuotaController],
  providers: [ValorCuotaService,PrismaService],
})
export class ValorCuotaModule {}
