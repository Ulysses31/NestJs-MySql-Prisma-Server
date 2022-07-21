import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateShipperDto } from './dto/create-shipper.dto';
import { UpdateShipperDto } from './dto/update-shipper.dto';
import { ShipperEntity } from './entities/shipper.entity';

@Injectable()
export class ShippersService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Shippers
	 * @returns Promise<ShipperEntity[]>
	 */
	async findAll(): Promise<ShipperEntity[]> {
		try {
			const data = await this.prisma.shippers.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get shippers by id
	 * @param id number
	 * @returns Promise<ShipperEntity>
	 */
	async findOne(id: number): Promise<ShipperEntity> {
		try {
			const data = await this.prisma.shippers.findFirstOrThrow({
				where: { ShipperID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new shippers
	 * @param createShipperDto CreateShipperDto
	 * @returns Promise<ShipperEntity>
	 */
	async create(
		createShipperDto: CreateShipperDto
	): Promise<ShipperEntity> {
		try {
			const data = await this.prisma.shippers.create({
				data: createShipperDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing shippers
	 * @param id number
	 * @param updateShipperDto UpdateShipperDto
	 * @returns Promise<ShipperEntity>
	 */
	async update(
		id: number,
		updateShipperDto: UpdateShipperDto
	): Promise<ShipperEntity> {
		try {
			const data = await this.prisma.shippers.update({
				where: {
					ShipperID: id
				},
				data: updateShipperDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing shippers
	 * @param id number
	 * @returns Promise<ShipperEntity>
	 */
	async remove(id: number): Promise<ShipperEntity> {
		try {
			const data = await this.prisma.shippers.delete({
				where: { ShipperID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
