import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { OrderDetailEntity } from './entities/order-detail.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';

@Injectable()
export class OrderDetailsService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of OrderDetails
	 * @returns Promise<OrderDetailEntity[]>
	 */
	async findAll(): Promise<OrderDetailEntity[]> {
		try {
			const data = await this.prisma.order_details.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get orderDetails by id
	 * @param id number
	 * @returns Promise<OrderDetailEntity>
	 */
	async findOne(id: number): Promise<OrderDetailEntity> {
		try {
			const data = await this.prisma.order_details.findFirstOrThrow({
				where: { OrderID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new orderDetails
	 * @param createOrderDetailDto CreateOrderDetailDto
	 * @returns Promise<OrderDetailEntity>
	 */
	async create(
		createOrderDetailDto: CreateOrderDetailDto
	): Promise<OrderDetailEntity> {
		try {
			const data = await this.prisma.order_details.create({
				data: createOrderDetailDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing orderDetails
	 * @param id number
	 * @param updateOrderDetailDto UpdateOrderDetailDto
	 * @returns Promise<OrderDetailEntity>
	 */
	async update(
		id: number,
		updateOrderDetailDto: UpdateOrderDetailDto
	): Promise<OrderDetailEntity> {
		try {
			const data = await this.prisma.order_details.update({
				where: {
					Id_OrderID_ProductID: {
						Id: id,
						OrderID: updateOrderDetailDto.OrderID,
						ProductID: updateOrderDetailDto.ProductID
					}
				},
				data: updateOrderDetailDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing orderDetails
	 * @param id number
	 * @returns Promise<OrderDetailEntity>
	 */
	async remove(id: number): Promise<OrderDetailEntity> {
		try {
			const dto = await this.prisma.order_details.findFirstOrThrow({
				where: { OrderID: id }
			});
			const data = await this.prisma.order_details.delete({
				where: {
					Id_OrderID_ProductID: {
						Id: id,
						OrderID: dto.OrderID,
						ProductID: dto.ProductID
					}
				}
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
