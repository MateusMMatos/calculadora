import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {
  calcular(expressao: string): number {
    try {
      // Cuidado: isso aqui usa Function ao invés de eval
      const resultado = Function(`return (${expressao})`)();

      if (typeof resultado !== 'number' || isNaN(resultado)) {
        throw new Error('Expressão inválida');
      }

      return resultado;
    } catch (e) {
      throw new Error('Expressão inválida');
    }
  }
}
