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
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetailEntity } from './entities/order-detail.entity';
import { OrderDetailsService } from './order-details.service';

@Controller('orderDetails')
//@UseGuards(JwtAuthGuard)
@ApiTags('OrderDetails')
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
export class OrderDetailsController {
	constructor(
		private readonly orderDetailsService: OrderDetailsService
	) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published orderDetails' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: OrderDetailEntity
	})
	async findAll(): Promise<OrderDetailEntity[]> {
		return await this.orderDetailsService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get orderDetail by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: OrderDetailEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<OrderDetailEntity> {
		return await this.orderDetailsService.findOne(+id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new orderDetail' })
	@ApiBody({ type: OrderDetailEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: OrderDetailEntity
	})
	async create(
		@Body() createOrderDetailDto: CreateOrderDetailDto
	): Promise<OrderDetailEntity> {
		return await this.orderDetailsService.create(createOrderDetailDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing orderDetail' })
	@ApiBody({ type: OrderDetailEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: OrderDetailEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string,
		@Body() updateOrderDetailDto: UpdateOrderDetailDto
	): Promise<OrderDetailEntity> {
		return await this.orderDetailsService.update(
			+id,
			updateOrderDetailDto
		);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing orderDetail' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: OrderDetailEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<OrderDetailEntity> {
		return await this.orderDetailsService.remove(+id);
	}
}
