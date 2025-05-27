import { PartialType } from '@nestjs/mapped-types';
import { CreateValorCuotaDto } from './create-valor-cuota.dto';

export class UpdateValorCuotaDto extends PartialType(CreateValorCuotaDto) {}
