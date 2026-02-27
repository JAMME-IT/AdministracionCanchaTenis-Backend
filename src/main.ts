import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({ /* config de validacion de datos */
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));

    app.setGlobalPrefix('api/v1') /*prefijo global para que todas las rutas de la API empiecen con ese prefijo */

    app.enableCors({    /* Aqui se Habilita CORS para permitir solicitudes-HTTP desde el frontend del cliente(Vite) */
        origin: 'http://localhost:5173', // puerto por defecto de Vite
        credentials: true,
    });


    const config = new DocumentBuilder()  /* config de swagguer */
        .setTitle('Gestión de Club API')
        .setDescription('Esta API permite gestionar socios, cuotas, turnos, usuarios y otros recursos de un club de manera eficiente y estructurada.')
        .setVersion('1.0')
        .addBearerAuth()       // Agrega auth Bearer (JWT) en Swagger (candadito para proteger las rutas que requieren auth)
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);


    await app.listen(3000); /* process.env.PORT ?? 3000 */
}
bootstrap();