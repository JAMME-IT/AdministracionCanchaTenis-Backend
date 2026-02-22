import { Controller, Get, Post, Body } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  // GET: /roles -> Lista los roles disponibles (Admin, Socio, Invitado)
  @Get()
  findAll() {
    return this.rolService.findAll();
  }
  
// POST: /roles/asignar -> Asigna un rol a un usuario
  @Post('asignar')
  asignarRol(@Body() createRolDto: CreateRolDto) {
    return this.rolService.asignarRolAUsuario(createRolDto);
  }
}
