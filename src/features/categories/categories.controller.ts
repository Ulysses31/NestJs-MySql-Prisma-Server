import { CategoryEntity } from './entities/category.entity';
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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaPromise } from '@prisma/client';

@Controller('categories')
//@UseGuards(JwtAuthGuard)
@ApiTags('Categories')
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
export class CategoriesController {
	constructor(
		private readonly categoriesService: CategoriesService
	) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published categories' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: CategoryEntity
	})
	async findAll(): Promise<CategoryEntity[]> {
		return await this.categoriesService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get category by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: CategoryEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<CategoryEntity> {
		return await this.categoriesService.findOne(+id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new category' })
	@ApiBody({ type: CategoryEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: CategoryEntity
	})
	async create(
		@Body() createCategoryDto: CreateCategoryDto
	): Promise<CategoryEntity> {
		return await this.categoriesService.create(createCategoryDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing category' })
	@ApiBody({ type: CategoryEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: CategoryEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string,
		@Body() updateCategoryDto: UpdateCategoryDto
	): Promise<CategoryEntity> {
		return await this.categoriesService.update(
			+id,
			updateCategoryDto
		);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing category' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: CategoryEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<CategoryEntity> {
		return await this.categoriesService.remove(+id);
	}
}
