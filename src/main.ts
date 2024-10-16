import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 app.enableCors()
 
  //swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Business Is Business')
    .setDescription('Api to handle business is business functionalities')
    .setVersion('1.0')
    .build()


    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api',app,document)


  await app.listen(3000);
}
bootstrap();
