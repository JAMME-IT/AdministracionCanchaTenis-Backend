import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoCuotaService } from './estado-cuota.service';
import { CreateEstadoCuotaDto } from './dto/create-estado-cuota.dto';
import { UpdateEstadoCuotaDto } from './dto/update-estado-cuota.dto';

@Controller('estado-cuota')
export class EstadoCuotaController {
  constructor(private readonly estadoCuotaService: EstadoCuotaService) {}

  @Post()
  create(@Body() createEstadoCuotaDto: CreateEstadoCuotaDto) {
    return this.estadoCuotaService.create(createEstadoCuotaDto);
  }

  @Get()
  findAll() {
    return this.estadoCuotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoCuotaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoCuotaDto: UpdateEstadoCuotaDto) {
    return this.estadoCuotaService.update(+id, updateEstadoCuotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoCuotaService.remove(+id);
  }
}
