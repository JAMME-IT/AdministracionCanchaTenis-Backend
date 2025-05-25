import { Module } from '@nestjs/common';
import { CuotaService } from './cuota.service';
import { CuotaController } from './cuota.controller';

@Module({
  controllers: [CuotaController],
  providers: [CuotaService],
})
export class CuotaModule {}
