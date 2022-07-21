import { EmployeeTerritoriesService } from './employee-territories.service';
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeTerritoriesController } from './employee-territories.controller';

describe('EmployeeTerritoriesController', () => {
	let controller: EmployeeTerritoriesController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EmployeeTerritoriesController],
			providers: [EmployeeTerritoriesService]
		}).compile();

		controller = module.get<EmployeeTerritoriesController>(
			EmployeeTerritoriesController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
