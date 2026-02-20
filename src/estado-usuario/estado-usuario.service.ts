import { Injectable } from '@nestjs/common';
import { CreateEstadoUsuarioDto } from './dto/create-estado-usuario.dto';
import { UpdateEstadoUsuarioDto } from './dto/update-estado-usuario.dto';

@Injectable()
export class EstadoUsuarioService {
  create(createEstadoUsuarioDto: CreateEstadoUsuarioDto) {
    return 'This action adds a new estadoUsuario';
  }

  findAll() {
    return `This action returns all estadoUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoUsuario`;
  }

  update(id: number, updateEstadoUsuarioDto: UpdateEstadoUsuarioDto) {
    return `This action updates a #${id} estadoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoUsuario`;
  }
}
