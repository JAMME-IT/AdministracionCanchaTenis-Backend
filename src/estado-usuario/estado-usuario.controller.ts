import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoUsuarioService } from './estado-usuario.service';
import { CreateEstadoUsuarioDto } from './dto/create-estado-usuario.dto';
import { UpdateEstadoUsuarioDto } from './dto/update-estado-usuario.dto';

@Controller('estado-usuario')
export class EstadoUsuarioController {
  constructor(private readonly estadoUsuarioService: EstadoUsuarioService) {}

  @Post()
  create(@Body() createEstadoUsuarioDto: CreateEstadoUsuarioDto) {
    return this.estadoUsuarioService.create(createEstadoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.estadoUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoUsuarioDto: UpdateEstadoUsuarioDto) {
    return this.estadoUsuarioService.update(+id, updateEstadoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoUsuarioService.remove(+id);
  }
}
