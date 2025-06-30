import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraController } from './calculadora.controller';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraController', () => {
  let controller: CalculadoraController;

  beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    controllers: [CalculadoraController],
    providers: [CalculadoraService], // <--- isso aqui resolve
  }).compile();

  controller = module.get<CalculadoraController>(CalculadoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
