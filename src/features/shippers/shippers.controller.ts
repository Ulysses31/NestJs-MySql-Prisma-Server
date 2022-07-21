import { ShipperEntity } from './entities/shipper.entity';
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
import { ShippersService } from './shippers.service';
import { CreateShipperDto } from './dto/create-shipper.dto';
import { UpdateShipperDto } from './dto/update-shipper.dto';
import { PrismaPromise } from '@prisma/client';

@Controller('shippers')
//@UseGuards(JwtAuthGuard)
@ApiTags('Shippers')
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
export class ShippersController {
	constructor(
		private readonly shippersService: ShippersService
	) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published shippers' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: ShipperEntity
	})
	async findAll(): Promise<ShipperEntity[]> {
		return await this.shippersService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get shipper by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: ShipperEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<ShipperEntity> {
		return await this.shippersService.findOne(+id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new shipper' })
	@ApiBody({ type: ShipperEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: ShipperEntity
	})
	async create(
		@Body() createShipperDto: CreateShipperDto
	): Promise<ShipperEntity> {
		return await this.shippersService.create(createShipperDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing shipper' })
	@ApiBody({ type: ShipperEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: ShipperEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string,
		@Body() updateShipperDto: UpdateShipperDto
	): Promise<ShipperEntity> {
		return await this.shippersService.update(
			+id,
			updateShipperDto
		);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing shipper' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: ShipperEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<ShipperEntity> {
		return await this.shippersService.remove(+id);
	}
}
