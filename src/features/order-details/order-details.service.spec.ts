import { OrderDetailsService } from './order-details.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('OrderDetailsService', () => {
	let service: OrderDetailsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [OrderDetailsService]
		}).compile();

		service = module.get<OrderDetailsService>(OrderDetailsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
