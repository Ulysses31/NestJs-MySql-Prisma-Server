import { EmployeesService } from './employees.service';
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesController } from './employees.controller';

describe('employeesController', () => {
	let controller: EmployeesController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EmployeesController],
			providers: [EmployeesService]
		}).compile();

		controller = module.get<EmployeesController>(EmployeesController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
