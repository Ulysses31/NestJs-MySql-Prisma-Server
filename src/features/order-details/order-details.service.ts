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
				where: { Id: id }
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
			if (createOrderDetailDto.ProductID) {
				createOrderDetailDto.ProductID = parseInt(
					createOrderDetailDto.ProductID.toString()
				);
			}
			if (createOrderDetailDto.Quantity) {
				createOrderDetailDto.Quantity = parseInt(
					createOrderDetailDto.Quantity.toString()
				);
			}
			if (createOrderDetailDto.OrderID) {
				createOrderDetailDto.OrderID = parseInt(
					createOrderDetailDto.OrderID.toString()
				);
			}
			if (createOrderDetailDto.Discount) {
				createOrderDetailDto.Discount = parseFloat(
					createOrderDetailDto.Discount.toString()
				);
			}

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
			updateOrderDetailDto.UpdatedAt = new Date();

			const dto = await this.prisma.order_details.findFirstOrThrow({
				where: { Id: id }
			});

			if (updateOrderDetailDto.ProductID) {
				updateOrderDetailDto.ProductID = parseInt(
					updateOrderDetailDto.ProductID.toString()
				);
			}
			if (updateOrderDetailDto.Quantity) {
				updateOrderDetailDto.Quantity = parseInt(
					updateOrderDetailDto.Quantity.toString()
				);
			}
			if (updateOrderDetailDto.OrderID) {
				updateOrderDetailDto.OrderID = parseInt(
					updateOrderDetailDto.OrderID.toString()
				);
			}
			if (updateOrderDetailDto.Discount) {
				updateOrderDetailDto.Discount = parseFloat(
					updateOrderDetailDto.Discount.toString()
				);
			}

			const data = await this.prisma.order_details.update({
				where: {
					Id_OrderID_ProductID: {
						Id: id,
						OrderID: dto.OrderID,
						ProductID: dto.ProductID
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
				where: { Id: id }
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
