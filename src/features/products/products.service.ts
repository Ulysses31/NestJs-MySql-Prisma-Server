import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Products
	 * @returns Promise<ProductEntity[]>
	 */
	async findAll(): Promise<ProductEntity[]> {
		try {
			const data = await this.prisma.products.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get products by id
	 * @param id number
	 * @returns Promise<ProductEntity>
	 */
	async findOne(id: number): Promise<ProductEntity> {
		try {
			const data = await this.prisma.products.findFirstOrThrow({
				where: { ProductID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new products
	 * @param createProductDto CreateProductDto
	 * @returns Promise<ProductEntity>
	 */
	async create(
		createProductDto: CreateProductDto
	): Promise<ProductEntity> {
		try {
			const data = await this.prisma.products.create({
				data: createProductDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing products
	 * @param id number
	 * @param updateProductDto UpdateProductDto
	 * @returns Promise<ProductEntity>
	 */
	async update(
		id: number,
		updateProductDto: UpdateProductDto
	): Promise<ProductEntity> {
		try {
			updateProductDto.UpdatedAt = new Date();
			const data = await this.prisma.products.update({
				where: {
					ProductID: id
				},
				data: updateProductDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing products
	 * @param id number
	 * @returns Promise<ProductEntity>
	 */
	async remove(id: number): Promise<ProductEntity> {
		try {
			const data = await this.prisma.products.delete({
				where: { ProductID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
