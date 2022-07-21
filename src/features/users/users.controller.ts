import { UserEntity } from './entities/user.entity';
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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
//@UseGuards(JwtAuthGuard)
@ApiTags('Users')
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
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of published users' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: UserEntity
	})
	async findAll(): Promise<UserEntity[]> {
		return await this.usersService.findAll();
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get user by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK Success',
		type: UserEntity
	})
	async findOne(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<UserEntity> {
		return await this.usersService.findOne(+id);
	}

	@Post()
	@Version('1')
	@ApiOperation({ description: 'Create new user' })
	@ApiBody({ type: UserEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'Successfully created',
		type: UserEntity
	})
	async create(
		@Body() createUserDto: CreateUserDto
	): Promise<UserEntity> {
		return await this.usersService.create(createUserDto);
	}

	@Patch(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing user' })
	@ApiBody({ type: UserEntity })
	@ApiConsumes('application/json', 'application/xml')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: UserEntity
	})
	async update(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string,
		@Body() updateUserDto: UpdateUserDto
	): Promise<UserEntity> {
		return await this.usersService.update(+id, updateUserDto);
	}

	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete existing user' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'Successfully modified',
		type: UserEntity
	})
	async remove(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<UserEntity> {
		return await this.usersService.remove(+id);
	}
}
