import { ArticleEntity } from './entities/article.entity';
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
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaPromise } from '@prisma/client';

@Controller('articles')
//@UseGuards(JwtAuthGuard)
@ApiTags('Articles')
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
export class ArticlesController {
	constructor(private readonly articlesService: ArticlesService) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published articles' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: ArticleEntity
	})
	async findAll(): Promise<ArticleEntity[]> {
		return await this.articlesService.findAll();
	}

	@Get('drafts')
	@Version('1')
	@ApiOperation({ description: 'List of unpublished articles' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: ArticleEntity
	})
	async findDrafts(): Promise<ArticleEntity[]> {
		return await this.articlesService.findDrafts();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get article by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: ArticleEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<ArticleEntity> {
		return await this.articlesService.findOne(+id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new article' })
	@ApiBody({ type: ArticleEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: ArticleEntity
	})
	async create(
		@Body() createArticleDto: CreateArticleDto
	): Promise<ArticleEntity> {
		return await this.articlesService.create(createArticleDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing article' })
	@ApiBody({ type: ArticleEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: ArticleEntity
	})
	async update(
		@Param('id') id: string,
		@Body() updateArticleDto: UpdateArticleDto
	): Promise<ArticleEntity> {
		return await this.articlesService.update(+id, updateArticleDto);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing article' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: ArticleEntity
	})
	async remove(@Param('id') id: string): Promise<ArticleEntity> {
		return await this.articlesService.remove(+id);
	}
}
