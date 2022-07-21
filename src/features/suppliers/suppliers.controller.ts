import { UpdateSupplierDto } from './dto/update-suppliers.dto';
import { SupplierEntity } from './entities/supplier.entity';
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
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';

@Controller('suppliers')
//@UseGuards(JwtAuthGuard)
@ApiTags('Suppliers')
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
export class SuppliersController {
	constructor(
		private readonly suppliersService: SuppliersService
	) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published suppliers' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: SupplierEntity
	})
	async findAll(): Promise<SupplierEntity[]> {
		return await this.suppliersService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get supplier by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: SupplierEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<SupplierEntity> {
		return await this.suppliersService.findOne(+id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new supplier' })
	@ApiBody({ type: SupplierEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: SupplierEntity
	})
	async create(
		@Body() createSupplierDto: CreateSupplierDto
	): Promise<SupplierEntity> {
		return await this.suppliersService.create(createSupplierDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing supplier' })
	@ApiBody({ type: SupplierEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: SupplierEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string,
		@Body() updateSupplierDto: UpdateSupplierDto
	): Promise<SupplierEntity> {
		return await this.suppliersService.update(
			+id,
			updateSupplierDto
		);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing supplier' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: SupplierEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<SupplierEntity> {
		return await this.suppliersService.remove(+id);
	}
}
