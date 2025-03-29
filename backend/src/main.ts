import { NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe} from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);


  app.useGlobalPipes(new ValidationPipe({ transform: true })); //Валидация
  const corsOptions: CorsOptions = {
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    };
    const config = new DocumentBuilder() //Swagger
        .setTitle('PEGAS')
        .setDescription('Project about Increased State Academic Scholarship')
        .setVersion('1.0')
        .addTag('pegas')
        .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api', app, document);
  app.enableCors(corsOptions); //CORS для фронта
  await app.listen(3000);
}

bootstrap().then(() => {});

