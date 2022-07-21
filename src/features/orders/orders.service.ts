import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrdersService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Orders
	 * @returns Promise<OrderEntity[]>
	 */
	async findAll(): Promise<OrderEntity[]> {
		try {
			const data = await this.prisma.orders.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get orders by id
	 * @param id number
	 * @returns Promise<OrderEntity>
	 */
	async findOne(id: number): Promise<OrderEntity> {
		try {
			const data = await this.prisma.orders.findFirstOrThrow({
				where: { OrderID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new orders
	 * @param createOrderDto CreateOrderDto
	 * @returns Promise<OrderEntity>
	 */
	async create(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
		try {
			const data = await this.prisma.orders.create({
				data: createOrderDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing orders
	 * @param id number
	 * @param updateOrderDto UpdateOrderDto
	 * @returns Promise<OrderEntity>
	 */
	async update(
		id: number,
		updateOrderDto: UpdateOrderDto
	): Promise<OrderEntity> {
		try {
			const data = await this.prisma.orders.update({
				where: {
					OrderID: id
				},
				data: updateOrderDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing orders
	 * @param id number
	 * @returns Promise<OrderEntity>
	 */
	async remove(id: number): Promise<OrderEntity> {
		try {
			const data = await this.prisma.orders.delete({
				where: { OrderID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
