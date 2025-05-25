import { Module } from '@nestjs/common';
import { CuotaModule } from './cuota/cuota.module';

@Module({
  imports: [CuotaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
