import { RegionEntity } from './entities/region.entity';
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
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@Controller('regions')
//@UseGuards(JwtAuthGuard)
@ApiTags('Regions')
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
export class RegionsController {
	constructor(
		private readonly regionsService: RegionsService
	) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published regions' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: RegionEntity
	})
	async findAll(): Promise<RegionEntity[]> {
		return await this.regionsService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get region by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: RegionEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<RegionEntity> {
		return await this.regionsService.findOne(+id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new region' })
	@ApiBody({ type: RegionEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: RegionEntity
	})
	async create(
		@Body() createRegionDto: CreateRegionDto
	): Promise<RegionEntity> {
		return await this.regionsService.create(createRegionDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing region' })
	@ApiBody({ type: RegionEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: RegionEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string,
		@Body() updateRegionDto: UpdateRegionDto
	): Promise<RegionEntity> {
		return await this.regionsService.update(
			+id,
			updateRegionDto
		);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing region' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: RegionEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<RegionEntity> {
		return await this.regionsService.remove(+id);
	}
}
