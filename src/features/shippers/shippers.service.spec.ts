import { ShippersService } from './shippers.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ShippersService', () => {
  let service: ShippersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShippersService],
    }).compile();

    service = module.get<ShippersService>(ShippersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
