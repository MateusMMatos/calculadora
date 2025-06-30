import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculadoraService],
    }).compile();

    service = module.get<CalculadoraService>(CalculadoraService);
  });

  it('deve somar corretamente', () => {
    expect(service.calcular('2 + 3')).toBe(5);
  });

  it('deve subtrair corretamente', () => {
    expect(service.calcular('5 - 2')).toBe(3);
  });

  it('deve multiplicar corretamente', () => {
    expect(service.calcular('4 * 3')).toBe(12);
  });

  it('deve dividir corretamente', () => {
    expect(service.calcular('10 / 2')).toBe(5);
  });

  it('deve lançar erro em expressão inválida', () => {
    expect(() => service.calcular('2 +')).toThrow();
  });
});
