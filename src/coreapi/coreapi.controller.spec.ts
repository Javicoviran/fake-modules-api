import { Test, TestingModule } from '@nestjs/testing';
import { CoreapiController } from './coreapi.controller';

describe('CoreapiController', () => {
  let controller: CoreapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoreapiController],
    }).compile();

    controller = module.get<CoreapiController>(CoreapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
