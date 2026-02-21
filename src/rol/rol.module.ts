import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [RolController],
  providers: [RolService, PrismaService],
  exports: [RolService], // Lo exportamos por si otro módulo necesita verificar roles
})
export class RolModule {}
