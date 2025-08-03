import { PartialType } from '@nestjs/swagger';
import { CreateLineaCuotaDto } from './create-linea-cuota.dto';

export class UpdateLineaCuotaDto extends PartialType(CreateLineaCuotaDto) {

}
