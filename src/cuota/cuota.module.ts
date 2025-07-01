import { Module } from '@nestjs/common';
import { CuotaService } from './cuota.service';
import { CuotaController } from './cuota.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CuotaController],
  providers: [CuotaService,PrismaService],
})
export class CuotaModule {}

