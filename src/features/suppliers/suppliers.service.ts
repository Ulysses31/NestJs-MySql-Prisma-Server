import { UpdateSupplierDto } from './dto/update-suppliers.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { SupplierEntity } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Suppliers
	 * @returns Promise<SupplierEntity[]>
	 */
	async findAll(): Promise<SupplierEntity[]> {
		try {
			const data = await this.prisma.suppliers.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get suppliers by id
	 * @param id number
	 * @returns Promise<SupplierEntity>
	 */
	async findOne(id: number): Promise<SupplierEntity> {
		try {
			const data = await this.prisma.suppliers.findFirstOrThrow({
				where: { Id: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new suppliers
	 * @param createSupplierDto CreateSupplierDto
	 * @returns Promise<SupplierEntity>
	 */
	async create(
		createSupplierDto: CreateSupplierDto
	): Promise<SupplierEntity> {
		try {
			const data = await this.prisma.suppliers.create({
				data: createSupplierDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing suppliers
	 * @param id number
	 * @param updateSupplierDto UpdateSupplierDto
	 * @returns Promise<SupplierEntity>
	 */
	async update(
		id: number,
		updateSupplierDto: UpdateSupplierDto
	): Promise<SupplierEntity> {
		try {
			const data = await this.prisma.suppliers.update({
				where: {
					Id: id
				},
				data: updateSupplierDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing suppliers
	 * @param id number
	 * @returns Promise<SupplierEntity>
	 */
	async remove(id: number): Promise<SupplierEntity> {
		try {
			const data = await this.prisma.suppliers.delete({
				where: { Id: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
