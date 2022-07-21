import { OrderEntity } from './entities/order.entity';
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
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
//@UseGuards(JwtAuthGuard)
@ApiTags('Orders')
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
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published orders' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: OrderEntity
	})
	async findAll(): Promise<OrderEntity[]> {
		return await this.ordersService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get order by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: OrderEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<OrderEntity> {
		return await this.ordersService.findOne(+id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new order' })
	@ApiBody({ type: OrderEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: OrderEntity
	})
	async create(
		@Body() createOrderDto: CreateOrderDto
	): Promise<OrderEntity> {
		return await this.ordersService.create(createOrderDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing order' })
	@ApiBody({ type: OrderEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: OrderEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string,
		@Body() updateOrderDto: UpdateOrderDto
	): Promise<OrderEntity> {
		return await this.ordersService.update(+id, updateOrderDto);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing order' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: OrderEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<OrderEntity> {
		return await this.ordersService.remove(+id);
	}
}
