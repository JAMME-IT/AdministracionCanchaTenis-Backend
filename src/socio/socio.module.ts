import { Module } from '@nestjs/common';
import { SocioService } from './socio.service';
import { SocioController } from './socio.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SocioController],
  providers: [SocioService, PrismaService],
  exports: [SocioService]
})
export class SocioModule {}
