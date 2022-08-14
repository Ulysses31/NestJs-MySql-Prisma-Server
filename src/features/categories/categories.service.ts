import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoriesService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Categories
	 * @returns Promise<CategoryEntity[]>
	 */
	async findAll(): Promise<CategoryEntity[]> {
		try {
			const data = await this.prisma.categories.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get categories by id
	 * @param id number
	 * @returns Promise<CategoryEntity>
	 */
	async findOne(id: number): Promise<CategoryEntity> {
		try {
			const data = await this.prisma.categories.findFirstOrThrow({
				where: { CategoryID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new categories
	 * @param createCategoryDto CreateCategoryDto
	 * @returns Promise<CategoryEntity>
	 */
	async create(
		createCategoryDto: CreateCategoryDto
	): Promise<CategoryEntity> {
		try {
			const data = await this.prisma.categories.create({
				data: createCategoryDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing categories
	 * @param id number
	 * @param updateCategoryDto UpdateCategoryDto
	 * @returns Promise<CategoryEntity>
	 */
	async update(
		id: number,
		updateCategoryDto: UpdateCategoryDto
	): Promise<CategoryEntity> {
		try {
			updateCategoryDto.UpdatedAt = new Date();
			const data = await this.prisma.categories.update({
				where: {
					CategoryID: id
				},
				data: updateCategoryDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing categories
	 * @param id number
	 * @returns Promise<CategoryEntity>
	 */
	async remove(id: number): Promise<CategoryEntity> {
		try {
			const data = await this.prisma.categories.delete({
				where: { CategoryID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
