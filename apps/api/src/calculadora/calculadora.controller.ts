import { Controller, Post, Body } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('operacao')
export class CalculadoraController {
  constructor(private readonly service: CalculadoraService) {}

  @Post()
  calcular(@Body('expressao') expressao: string) {
    const resultado = this.service.calcular(expressao);
    return { resultado };
  }
}
