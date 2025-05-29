import { Module } from '@nestjs/common';
import { LineaCuotaService } from './linea-cuota.service';
import { LineaCuotaController } from './linea-cuota.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LineaCuotaController],
  providers: [LineaCuotaService,PrismaService],
})
export class LineaCuotaModule {}
