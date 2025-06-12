import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ifError } from 'assert';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    try{
    await this.$connect();
    console.log("Conectado a la Base de Datos");
    }
    catch(error){
      if (error instanceof Error)
        console.log(error.message)
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
