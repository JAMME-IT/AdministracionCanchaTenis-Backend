import { Module } from '@nestjs/common';
import { LineaCuotaService } from './linea-cuota.service';
import { LineaCuotaController } from './linea-cuota.controller';

@Module({
  controllers: [LineaCuotaController],
  providers: [LineaCuotaService],
})
export class LineaCuotaModule {}
