import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerEntity } from './entities/customer.entity';

@Injectable()
export class CustomersService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Customers
	 * @returns Promise<CustomerEntity[]>
	 */
	async findAll(): Promise<CustomerEntity[]> {
		try {
			const data = await this.prisma.customers.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get categories by id
	 * @param id string
	 * @returns Promise<CustomerEntity>
	 */
	async findOne(id: string): Promise<CustomerEntity> {
		try {
			const data = await this.prisma.customers.findFirstOrThrow({
				where: { CustomerID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new categories
	 * @param createCustomerDto CreateCustomerDto
	 * @returns Promise<CustomerEntity>
	 */
	async create(
		createCustomerDto: CreateCustomerDto
	): Promise<CustomerEntity> {
		try {
			const data = await this.prisma.customers.create({
				data: createCustomerDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing categories
	 * @param id string
	 * @param updateCustomerDto UpdateCustomerDto
	 * @returns Promise<CustomerEntity>
	 */
	async update(
		id: string,
		updateCustomerDto: UpdateCustomerDto
	): Promise<CustomerEntity> {
		try {
			updateCustomerDto.UpdatedAt = new Date();
			const data = await this.prisma.customers.update({
				where: {
					CustomerID: id
				},
				data: updateCustomerDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing categories
	 * @param id string
	 * @returns Promise<CustomerEntity>
	 */
	async remove(id: string): Promise<CustomerEntity> {
		try {
			const data = await this.prisma.customers.delete({
				where: { CustomerID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
