import { PartialType } from '@nestjs/swagger';
import { CreateEstadoUsuarioDto } from './create-estado-usuario.dto';

export class UpdateEstadoUsuarioDto extends PartialType(CreateEstadoUsuarioDto) {}
