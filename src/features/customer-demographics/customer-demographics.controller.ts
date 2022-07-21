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
import { CustomerDemographicsService } from './customer-demographics.service';
import { CreateCustomerDemographicsDto } from './dto/create-customer-demographics.dto';
import { UpdateCustomerDemographicsDto } from './dto/update-customer-demographics.dto';
import { CustomerDemographicsEntity } from './entities/customer-demographics.entity';

@Controller('customerDemographics')
//@UseGuards(JwtAuthGuard)
@ApiTags('Customer Demographics')
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
export class CustomerDemographicsController {
	constructor(
		private readonly customerDemographicsService: CustomerDemographicsService
	) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published customerDemographics' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: CustomerDemographicsEntity
	})
	async findAll(): Promise<CustomerDemographicsEntity[]> {
		return await this.customerDemographicsService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get customer demographic by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: CustomerDemographicsEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<CustomerDemographicsEntity> {
		return await this.customerDemographicsService.findOne(id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new customer demographic' })
	@ApiBody({ type: CustomerDemographicsEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: CustomerDemographicsEntity
	})
	async create(
		@Body() createCustomerDemographicsDto: CreateCustomerDemographicsDto
	): Promise<CustomerDemographicsEntity> {
		return await this.customerDemographicsService.create(createCustomerDemographicsDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing customer demographic' })
	@ApiBody({ type: CustomerDemographicsEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: CustomerDemographicsEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string,
		@Body() updateCustomerDemographicsDto: UpdateCustomerDemographicsDto
	): Promise<CustomerDemographicsEntity> {
		return await this.customerDemographicsService.update(
			id,
			updateCustomerDemographicsDto
		);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing customer demographic' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: CustomerDemographicsEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<CustomerDemographicsEntity> {
		return await this.customerDemographicsService.remove(id);
	}
}
