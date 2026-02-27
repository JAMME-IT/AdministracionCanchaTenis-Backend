import { Injectable } from '@nestjs/common';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SocioService {
  constructor(private prisma: PrismaService) {}

  async crearPerfilSocio(idUsuario: number, tx?: Prisma.TransactionClient) {
    const db = tx || this.prisma;

    return db.socio.create({
      data: {
        idUsuario: idUsuario,
        estado: 'Activo',
      },
    });
  }

  //METODO PARA DESACTIVAR EL PERFIL DE SOCIO:Y SE LE PONE LA FECHA DE BAJA Y SE CAMBIA EL ESTADO A INACTIVO
  async desactivarPerfilSocio(idUsuario: number, tx?: Prisma.TransactionClient) {
    const db = tx || this.prisma;

    return db.socio.update({
      where: { idUsuario },
      data: {
        fechaBaja: new Date(),
        estado: 'Inactivo',
      },
    });
  }

  //METODO PARA REACTIVAR EL PERFIL DE SOCIO,SE LE PONE LA FECHA DE ALTA ACTUAL Y SE CAMBIA EL ESTADO A ACTIVO
  async reactivarPerfilSocio(idUsuario: number, tx?: Prisma.TransactionClient) {
    const db = tx || this.prisma;

    return db.socio.update({
      where: { idUsuario },
      data: {
        fechaAlta: new Date(),
        fechaBaja: null,
        estado: 'Activo',
      },
    });
  }

  //METODO PARA VERIFICAR SI FUE SOCIO:
  async verificarSiFueSocio(idUsuario: number) {
    
    const perfilSocio = await this.prisma.socio.findUnique({
      where: { idUsuario },
    });

    // Si perfilSocio es distinto de null se retorna true (ojo no truethly)
    return perfilSocio !== null;
  }


  create(createSocioDto: CreateSocioDto) {
    return 'This action adds a new socio';
  }
  findAll() {
    return `This action returns all socio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socio`;
  }

  update(id: number, updateSocioDto: UpdateSocioDto) {
    return `This action updates a #${id} socio`;
  }

  remove(id: number) {
    return `This action removes a #${id} socio`;
  }
}
