import { EmployeeEntity } from './entities/employee.entity';
import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Version,
	HttpStatus,
	ParseIntPipe
} from '@nestjs/common';
import {
	ApiBadRequestResponse,
	ApiBody,
	ApiConsumes,
	ApiCreatedResponse,
	ApiForbiddenResponse,
	ApiInternalServerErrorResponse,
	ApiNotAcceptableResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiOperation,
	ApiProduces,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaPromise } from '@prisma/client';

@Controller('employees')
//@UseGuards(JwtAuthGuard)
@ApiTags('Employees')
//@ApiBearerAuth()
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiUnauthorizedResponse({ description: 'User not authorized' })
@ApiForbiddenResponse({ description: 'Request is forbidden' })
@ApiNotFoundResponse({ description: 'Request not found' })
@ApiNotAcceptableResponse({
	description: 'Request is not acceptable'
})
@ApiInternalServerErrorResponse({
	description: 'Internal Server Error'
})
export class EmployeesController {
	constructor(
		private readonly employeesService: EmployeesService
	) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published employees' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: EmployeeEntity
	})
	async findAll(): Promise<EmployeeEntity[]> {
		return await this.employeesService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get employee by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: EmployeeEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Promise<EmployeeEntity> {
		return await this.employeesService.findOne(id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new employee' })
	@ApiBody({ type: EmployeeEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: EmployeeEntity
	})
	async create(
		@Body() createEmployeeDto: CreateEmployeeDto
	): Promise<EmployeeEntity> {
		return await this.employeesService.create(createEmployeeDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing employee' })
	@ApiBody({ type: EmployeeEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: EmployeeEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() updateEmployeeDto: UpdateEmployeeDto
	): Promise<EmployeeEntity> {
		return await this.employeesService.update(
			id,
			updateEmployeeDto
		);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing employee' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: EmployeeEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Promise<EmployeeEntity> {
		return await this.employeesService.remove(id);
	}
}
