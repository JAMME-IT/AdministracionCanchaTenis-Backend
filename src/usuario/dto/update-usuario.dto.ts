import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
}
 /* indica que todos los campos son opcionales, cuyos campos se heredan de CreateUsuarioDto (solo en swagguer) */
