import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Creacion de Boostrap Inicial
 * Se especifica los modulos que se van a utilizar
 * se inicializa la aplicacion
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
