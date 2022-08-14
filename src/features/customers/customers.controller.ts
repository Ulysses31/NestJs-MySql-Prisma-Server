import { CustomerEntity } from './entities/customer.entity';
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
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
//@UseGuards(JwtAuthGuard)
@ApiTags('Customers')
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
export class CustomersController {
	constructor(private readonly customersService: CustomersService) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published customers' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: CustomerEntity
	})
	async findAll(): Promise<CustomerEntity[]> {
		return await this.customersService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get customer by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: CustomerEntity
	})
	async findOne(
		@Param('id')
		id: string
	): Promise<CustomerEntity> {
		return await this.customersService.findOne(id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new customer' })
	@ApiBody({ type: CustomerEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: CustomerEntity
	})
	async create(
		@Body() createCustomerDto: CreateCustomerDto
	): Promise<CustomerEntity> {
		return await this.customersService.create(createCustomerDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing customer' })
	@ApiBody({ type: CustomerEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: CustomerEntity
	})
	async update(
		@Param('id')
		id: string,
		@Body() updateCustomerDto: UpdateCustomerDto
	): Promise<CustomerEntity> {
		return await this.customersService.update(id, updateCustomerDto);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing customer' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: CustomerEntity
	})
	async remove(
		@Param('id')
		id: string
	): Promise<CustomerEntity> {
		return await this.customersService.remove(id);
	}
}
