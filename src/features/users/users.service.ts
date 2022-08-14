import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Users
	 * @returns Promise<UserEntity[]>
	 */
	async findAll(): Promise<UserEntity[]> {
		try {
			const data = await this.prisma.users.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get users by id
	 * @param id number
	 * @returns Promise<UserEntity>
	 */
	async findOne(id: number): Promise<UserEntity> {
		try {
			const data = await this.prisma.users.findFirstOrThrow({
				where: { Id: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new users
	 * @param createUserDto CreateUserDto
	 * @returns Promise<UserEntity>
	 */
	async create(createUserDto: CreateUserDto): Promise<UserEntity> {
		try {
			const data = await this.prisma.users.create({
				data: createUserDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing users
	 * @param id number
	 * @param updateUserDto UpdateUserDto
	 * @returns Promise<UserEntity>
	 */
	async update(
		id: number,
		updateUserDto: UpdateUserDto
	): Promise<UserEntity> {
		try {
			updateUserDto.UpdatedAt = new Date();
			const data = await this.prisma.users.update({
				where: {
					Id: id
				},
				data: updateUserDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing users
	 * @param id number
	 * @returns Promise<UserEntity>
	 */
	async remove(id: number): Promise<UserEntity> {
		try {
			const data = await this.prisma.users.delete({
				where: { Id: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
