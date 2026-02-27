import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { GetUsuarioDto } from './dto/get-usuario.dto';
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { CambiarRolDto } from './dto/cambiar-rol.dto';
import { Rol } from '../common/enums/rol.enum';
import { Auth } from '../auth/decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/active-user.interface';

/* En el video no usa controller de usuario ya que para ello utiliza el controller
del auth para autenticar el usuario, si usa el servicio de usuario */

@ApiBearerAuth() //Indica a swagguer que esta ruta requiere autenticación con Bearer (JWT)
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

//Alta user
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }


//Buscar todos los user
  @Get()
  findAll(): Promise<GetUsuarioDto[]> {
    return this.usuarioService.findAll();
  }
/* el por defecto  
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  } */

//Buscar un user (devolver un user)
  @Get(':id')
  @ApiCreatedResponse({ type: GetUsuarioDto }) //para que en swagger muestre el dto de getUsuarioDto
  findOne(@Param('id') id: number) : Promise<GetUsuarioDto>{
    return this.usuarioService.findOne(id);
  }

//Actualizar cosas de user
  @Patch(':id')
  update(@Param('id') id: number,
  @Body() updateUsuarioDto: UpdateUsuarioDto) {

    return this.usuarioService.update(id, updateUsuarioDto);
  }

//Eliminar user
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuarioService.remove(id);
  }


//Cambiar rol de user
  @Patch(':id/rol')
  @Auth(Rol.ADMIN)
  async cambiarRol(
    @ActiveUser() user:UserActiveInterface,
    @Param('id') id: number, 
    @Body() body: CambiarRolDto
  ) {
    
    const { nuevoRol } = body;

    switch (nuevoRol) {
      case Rol.SOCIO:
        return await this.usuarioService.cambiarASocio(id); //No hacpasarle el Rol.Socio xq el metodo ya sabe que rol asignar(Socio obvio)
        
      case Rol.INVITADO:
        return await this.usuarioService.cambiarAInvitado(id);
        
      case Rol.ADMIN:
        return await this.usuarioService.cambiarAAdmin(id);
        
        default:
        throw new BadRequestException('Rol no reconocido');   
    }
  }

}
