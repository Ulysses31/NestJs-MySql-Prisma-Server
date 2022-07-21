import { Test, TestingModule } from '@nestjs/testing';
import { CustomerDemographicsService } from './customer-demographics.service';

describe('CustomerDemographicsService', () => {
	let service: CustomerDemographicsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CustomerDemographicsService]
		}).compile();

		service = module.get<CustomerDemographicsService>(
			CustomerDemographicsService
		);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
