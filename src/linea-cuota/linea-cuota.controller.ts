import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineaCuotaService } from './linea-cuota.service';
import { CreateLineaCuotaDto } from './dto/create-linea-cuota.dto';
import { UpdateLineaCuotaDto } from './dto/update-linea-cuota.dto';

@Controller('linea-cuota')   
export class LineaCuotaController {
constructor(private readonly lineaCuotaService: LineaCuotaService) {}

  @Post() // http://localhost:3000/linea-cuota
  create(
    @Body() createLineaCuotaDto: CreateLineaCuotaDto) {
    
    return this.lineaCuotaService.create(createLineaCuotaDto);
  }

  @Get()
  findAll() {
    return this.lineaCuotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.lineaCuotaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateLineaCuotaDto: UpdateLineaCuotaDto) {
    return this.lineaCuotaService.update(id, updateLineaCuotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.lineaCuotaService.remove(id);
  }
}
