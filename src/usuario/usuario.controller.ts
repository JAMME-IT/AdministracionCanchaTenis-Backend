import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { GetUsuarioDto } from './dto/get-usuario.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';


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
  @ApiCreatedResponse({ type: GetUsuarioDto })
  findOne(@Param('id') id: string) : Promise<GetUsuarioDto>{
    return this.usuarioService.findOne(+id);
  }

/* el por defecto 
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  } */

//Actualizar cosas de user
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

//Eliminar user
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
