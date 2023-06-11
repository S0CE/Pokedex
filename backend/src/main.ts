import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT: number = 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port: ${PORT}`);
  });
}
bootstrap();
