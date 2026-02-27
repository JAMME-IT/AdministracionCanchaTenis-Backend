import { IsEnum, IsNotEmpty } from 'class-validator';
import { Rol } from '../../common/enums/rol.enum';
import { ApiProperty } from '@nestjs/swagger';   /* importamos ApiProperty de swagger */

export class CambiarRolDto {
    
    @ApiProperty({ enum: Rol }) //para que en swagger muestre las opciones del enum
    @IsNotEmpty()
    @IsEnum(Rol)
    nuevoRol: Rol;
}
//podriamos importar el del common/enums/rol.enum si queremos