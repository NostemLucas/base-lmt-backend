import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import {
  SWAGGER_API_CURRENT_VERSION,
  SWAGGER_API_DESCRIPTION,
  SWAGGER_API_NAME,
  SWAGGER_API_ROOT,
} from './common/constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const bootstrap = async () => {
  //Configuracion de la aplicacion de nestjs
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  const configService = app.get(ConfigService);
  if (configService.get('NODE_ENV') !== 'production') {
    createSwagger(app);
  }
  // Configuracion de swagger
  app.setGlobalPrefix(configService.get('PATH_SUBDOMAIN') || 'api');
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  const port = configService.get('PORT');
  await app.listen(port);
};

function createSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_API_NAME)
    .setDescription(SWAGGER_API_DESCRIPTION)
    .setVersion(SWAGGER_API_CURRENT_VERSION)
    .addServer(`http://localhost:${process.env.PORT}/api/`)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(SWAGGER_API_ROOT, app, document);
}

bootstrap();
