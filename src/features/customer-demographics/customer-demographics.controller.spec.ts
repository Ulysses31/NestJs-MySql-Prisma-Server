import { CustomerDemographicsService } from './customer-demographics.service';
import { CustomerDemographicsController } from './customer-demographics.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('CustomerDemographicsController', () => {
  let controller: CustomerDemographicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerDemographicsController],
      providers: [CustomerDemographicsService],
    }).compile();

    controller = module.get<CustomerDemographicsController>(CustomerDemographicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
