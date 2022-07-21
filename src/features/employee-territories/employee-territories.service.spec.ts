import { EmployeeTerritoriesService } from './employee-territories.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('EmployeeTerritoriesService', () => {
  let service: EmployeeTerritoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeTerritoriesService],
    }).compile();

    service = module.get<EmployeeTerritoriesService>(EmployeeTerritoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
