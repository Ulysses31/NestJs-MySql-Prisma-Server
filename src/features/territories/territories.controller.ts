import { TerritoryEntity } from './entities/territory.entity';
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
import { CreateTerritoryDto } from './dto/create-territory.dto';
import { UpdateTerritoryDto } from './dto/update-territory.dto';
import { TerritoriesService } from './territories.service';

@Controller('territories')
//@UseGuards(JwtAuthGuard)
@ApiTags('Territories')
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
export class TerritoriesController {
	constructor(
		private readonly territoriesService: TerritoriesService
	) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published territories' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: TerritoryEntity
	})
	async findAll(): Promise<TerritoryEntity[]> {
		return await this.territoriesService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get territory by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: TerritoryEntity
	})
	async findOne(
		@Param('id')
		id: string
	): Promise<TerritoryEntity> {
		return await this.territoriesService.findOne(id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new territory' })
	@ApiBody({ type: TerritoryEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: TerritoryEntity
	})
	async create(
		@Body() createTerritoryDto: CreateTerritoryDto
	): Promise<TerritoryEntity> {
		return await this.territoriesService.create(createTerritoryDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing territory' })
	@ApiBody({ type: TerritoryEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: TerritoryEntity
	})
	async update(
		@Param('id')
		id: string,
		@Body() updateTerritoryDto: UpdateTerritoryDto
	): Promise<TerritoryEntity> {
		return await this.territoriesService.update(
			id,
			updateTerritoryDto
		);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing territory' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: TerritoryEntity
	})
	async remove(
		@Param('id')
		id: string
	): Promise<TerritoryEntity> {
		return await this.territoriesService.remove(id);
	}
}
