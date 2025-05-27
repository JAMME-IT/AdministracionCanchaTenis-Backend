import { PartialType } from '@nestjs/mapped-types';
import { CreateLineaCuotaDto } from './create-linea-cuota.dto';

export class UpdateLineaCuotaDto extends PartialType(CreateLineaCuotaDto) {}
