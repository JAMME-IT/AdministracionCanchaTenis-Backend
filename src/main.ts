import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
const app = await NestFactory.create(AppModule);

//Aqui se Habilita CORS para permitir solicitudes-HTTP desde el frontend del cliente(Vite)
app.enableCors({
origin: 'http://localhost:5173', // puerto por defecto de Vite
credentials: true,
});

const config = new DocumentBuilder()  /* config de swagguer */
    .setTitle('API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
const document = SwaggerModule.createDocument(app,config);
SwaggerModule.setup('api', app, document);


await app.listen(3000); /* process.env.PORT ?? 3000 */
}
bootstrap();