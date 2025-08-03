import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuotaService } from './cuota.service';
import { CreateCuotaDto } from './dto/create-cuota.dto';
import { UpdateCuotaDto } from './dto/update-cuota.dto';

@Controller('cuota')
export class CuotaController {
  constructor(private readonly cuotaService: CuotaService) {}

  @Post() //crear cuotas para todos los usuarios
  create(
    @Body() createCuotaDto: CreateCuotaDto) {
    return this.cuotaService.createForAllSocioUsers(createCuotaDto);
  }
  
  //traer cuotas con usuarios y estadocuota
  @Get()
  findAllWithUsers() {
    return this.cuotaService.findAllWithUsers();
  }
  //traer una cuota
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuotaService.findOne(+id);
  }

//traer unaCuota con su valorCuota y estadoCuota y lineaDeCuota
    @Get(':id/valorCuota/estadoCuota/lineaDeCuota')
  findOneWithValorYEstado(@Param('id') id: number) {
    return this.cuotaService.findOneWithValorYEstado(+id);
    }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuotaDto: UpdateCuotaDto) {
    return this.cuotaService.update(+id, updateCuotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuotaService.remove(+id);
  }
}
