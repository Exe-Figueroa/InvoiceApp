import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  await app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Corriendo en el puerto ${process.env.PORT || 3000} 🚀`)
  });
}
bootstrap();
