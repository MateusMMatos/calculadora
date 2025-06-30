import { Module } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';
import { CalculadoraController } from './calculadora.controller';

@Module({
  controllers: [CalculadoraController],
  providers: [CalculadoraService],
})
export class CalculadoraModule {}
