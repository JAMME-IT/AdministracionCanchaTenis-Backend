import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCuotaDto } from './dto/create-cuota.dto';
import { UpdateCuotaDto } from './dto/update-cuota.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cuota, EstadoValorCuota, EstadoCuota } from '@prisma/client';

@Injectable()
export class CuotaService {
  constructor(private prisma: PrismaService) { }

  async createForAllSocioUsers(createCuotaDto: CreateCuotaDto) {

    //0. Verifico si ya existe una cuota con la fecha de inicio
    const existeCuota = await this.prisma.cuota.findFirst({
      where: {
        fechaInicio: createCuotaDto.fechaInicio
      },
    });

    if (existeCuota) {
      throw new NotFoundException('Ya existe una cuota con la fecha de inicio ingresada.');
    } else {

      // 1. Obtener todos los usuarios
      const usuarios = await this.prisma.usuario.findMany();

      if (usuarios.length === 0) {
        throw new NotFoundException('No hay usuarios registrados.');
      }

      //2.Busco el ultimo ValorCuota
      const ultimoValorCuota = await this.prisma.valorCuota.findFirst({
        orderBy: {
          fechaCambio: 'desc'
        },
      });

      if (ultimoValorCuota) {

        console.log("El precio de la cuota es: ", ultimoValorCuota.precio);
        // 3. Iterar sobre cada usuario y crearle una cuota
        const cuotasCreadas: Cuota[] = [];

        for (const usuario of usuarios) {
          const newCuota = await this.prisma.cuota.create({
            data: {
              ...createCuotaDto,
              //montoTotal:ultimoValorCuota.precio, esto no se asigna xq el valor cambia en fcion a los pagos de socio
              idValorCuota: ultimoValorCuota.id, //relaciono la tabla valorCuota con cuota (1-*)
              idUsuario: usuario.id,           //relaciono usuario con cuota (1-*)
            },
          });
          cuotasCreadas.push(newCuota);
        }

        const EstadosCuotas: EstadoCuota[] = [];
        for (const cuotaCreada of cuotasCreadas) {
          const newEstadoCuota = await this.prisma.estadoCuota.create({
            data: {
              valor: EstadoValorCuota.Pendiente,
              idCuota: cuotaCreada.id, //relaciono cuota con estadocuota (1-*)
            },
          });
          EstadosCuotas.push(newEstadoCuota);
        }
        return {
          cuotas: cuotasCreadas,
          estados: EstadosCuotas,
        };
        /* return EstadosCuotas; */
      }
    }
  }


  ///
  async findAllWithUsers() {
    return this.prisma.cuota.findMany({
      include: {
        usuario: {
          select: {
            nombre: true,
            apellido: true
          }
        }
      }
    });
  }

  async findCuotaByPersona(nameUser: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { nombreUsuario: nameUser },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con nombre "${nameUser}" no encontrado`);
    }

    const cuotas = await this.prisma.cuota.findMany({
      where: { idUsuario: usuario.id },
      orderBy: { id: 'asc' },
    });

    return {
      nameUser: usuario.nombreUsuario,
      cuotas,
    };
  }

  //traer una cuota
  findOne(id: number) {
    return this.prisma.cuota.findUnique({ where: { id } });
  }

  //traer una cuota con valorCuota
  findOneWithValor(id: number) {
    return this.prisma.cuota.findUnique({
      where: { id },
      include: {
        valorCuota: {
          select: {
            precio: true
          }
        }
      }
    });
  }


  update(id: number, updateCuotaDto: UpdateCuotaDto) {
    return this.prisma.cuota.update({ where: { id }, data: updateCuotaDto });
  }

  remove(id: number) {
    return this.prisma.cuota.delete({ where: { id } });
  }
}
