import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exception.filter';
import { ValidationPipe } from '@nestjs/common';
require('newrelic');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Library example for DevOps')
  .setDescription('The library API description')
  .setVersion('1.0')
  .addTag('library')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  await app.listen(3000);
}
bootstrap();
