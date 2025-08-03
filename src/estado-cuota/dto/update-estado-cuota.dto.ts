import { PartialType } from '@nestjs/swagger';
import { CreateEstadoCuotaDto } from './create-estado-cuota.dto';


export class UpdateEstadoCuotaDto extends PartialType(CreateEstadoCuotaDto) {

}
