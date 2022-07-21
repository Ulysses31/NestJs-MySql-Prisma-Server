import { ProductEntity } from './entities/product.entity';
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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
//@UseGuards(JwtAuthGuard)
@ApiTags('Products')
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
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published products' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: ProductEntity
	})
	async findAll(): Promise<ProductEntity[]> {
		return await this.productsService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get product by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: ProductEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<ProductEntity> {
		return await this.productsService.findOne(+id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new product' })
	@ApiBody({ type: ProductEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: ProductEntity
	})
	async create(
		@Body() createProductDto: CreateProductDto
	): Promise<ProductEntity> {
		return await this.productsService.create(createProductDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing product' })
	@ApiBody({ type: ProductEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: ProductEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string,
		@Body() updateProductDto: UpdateProductDto
	): Promise<ProductEntity> {
		return await this.productsService.update(+id, updateProductDto);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing product' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: ProductEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<ProductEntity> {
		return await this.productsService.remove(+id);
	}
}
