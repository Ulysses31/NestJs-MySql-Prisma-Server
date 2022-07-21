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
import { CreateEmployeeTerritoryDto } from './dto/create-employee-territory.dto';
import { UpdateEmployeeTerritoryDto } from './dto/update-employee-territory.dto';
import { EmployeeTerritoriesService } from './employee-territories.service';
import { EmployeeTerritoryEntity } from './entities/employee-territory.entity';

@Controller('employeeTerritories')
//@UseGuards(JwtAuthGuard)
@ApiTags('Employee Territories')
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
export class EmployeeTerritoriesController {
	constructor(
		private readonly employeeTerritoriesService: EmployeeTerritoriesService
	) {}

	@Get()
	@Version('1')
	@ApiOperation({
		description: 'List of published employeeTerritories'
	})
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: EmployeeTerritoryEntity
	})
	async findAll(): Promise<EmployeeTerritoryEntity[]> {
		return await this.employeeTerritoriesService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get employeeTerritory by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: EmployeeTerritoryEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Promise<EmployeeTerritoryEntity> {
		return await this.employeeTerritoriesService.findOne(id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new employeeTerritory' })
	@ApiBody({ type: EmployeeTerritoryEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: EmployeeTerritoryEntity
	})
	async create(
		@Body() createEmployeeTerritoryDto: CreateEmployeeTerritoryDto
	): Promise<EmployeeTerritoryEntity> {
		return await this.employeeTerritoriesService.create(
			createEmployeeTerritoryDto
		);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing employeeTerritory' })
	@ApiBody({ type: EmployeeTerritoryEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: EmployeeTerritoryEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() updateEmployeeTerritoryDto: UpdateEmployeeTerritoryDto
	): Promise<EmployeeTerritoryEntity> {
		return await this.employeeTerritoriesService.update(
			id,
			updateEmployeeTerritoryDto
		);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing employeeTerritory' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: EmployeeTerritoryEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Promise<EmployeeTerritoryEntity> {
		return await this.employeeTerritoriesService.remove(id);
	}
}
