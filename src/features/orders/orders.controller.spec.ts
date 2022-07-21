import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('OrdersController', () => {
	let controller: OrdersController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OrdersController],
			providers: [OrdersService]
		}).compile();

		controller = module.get<OrdersController>(OrdersController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
