import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ValorCuotaService } from './valor-cuota.service';
import { CreateValorCuotaDto } from './dto/create-valor-cuota.dto';
import { UpdateValorCuotaDto } from './dto/update-valor-cuota.dto';

@Controller('valor-cuota')
export class ValorCuotaController {
  constructor(private readonly valorCuotaService: ValorCuotaService) {}

  @Post()
  create(
    @Body() createValorCuotaDto: CreateValorCuotaDto) {
    return this.valorCuotaService.create(createValorCuotaDto);
  }

  @Get()
  findAll() {
    return this.valorCuotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valorCuotaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateValorCuotaDto: UpdateValorCuotaDto) {
    return this.valorCuotaService.update(+id, updateValorCuotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valorCuotaService.remove(+id);
  }
}
