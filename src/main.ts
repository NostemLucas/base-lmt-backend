import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config'

export const SessionAppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  entities: [__dirname + '/../src/**/*.entity{.ts,.js}'],
})

const bootstrap = async () =>{
 //Configuracion de la aplicacion de nestjs
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  })


  //Configuracion de la base de datos
  await SessionAppDataSource.initialize()
  const configService = app.get(ConfigService)
  // Configuracion de swagger
    app.setGlobalPrefix(configService.get('PATH_SUBDOMAIN') || 'api')
    app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })
  const port = configService.get('PORT')
  await app.listen(port)

}
bootstrap();
