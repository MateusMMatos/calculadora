import { NestFactory } from '@nestjs/core';
import { CalculadoraModule } from './calculadora/calculadora.module';

async function bootstrap() {
  const app = await NestFactory.create(CalculadoraModule);
  await app.listen(3000);
}
bootstrap().catch((err) => console.error(err));
