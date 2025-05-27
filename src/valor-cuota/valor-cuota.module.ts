import { Module } from '@nestjs/common';
import { ValorCuotaService } from './valor-cuota.service';
import { ValorCuotaController } from './valor-cuota.controller';

@Module({
  controllers: [ValorCuotaController],
  providers: [ValorCuotaService],
})
export class ValorCuotaModule {}
