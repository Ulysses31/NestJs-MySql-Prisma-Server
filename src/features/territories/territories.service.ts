import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateTerritoryDto } from './dto/create-territory.dto';
import { UpdateTerritoryDto } from './dto/update-territory.dto';
import { TerritoryEntity } from './entities/territory.entity';

@Injectable()
export class TerritoriesService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Territories
	 * @returns Promise<TerritoryEntity[]>
	 */
	async findAll(): Promise<TerritoryEntity[]> {
		try {
			const data = await this.prisma.territories.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get territories by id
	 * @param id string
	 * @returns Promise<TerritoryEntity>
	 */
	async findOne(id: string): Promise<TerritoryEntity> {
		try {
			const data = await this.prisma.territories.findFirstOrThrow({
				where: { TerritoryID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new territories
	 * @param createTerritoryDto CreateTerritoryDto
	 * @returns Promise<TerritoryEntity>
	 */
	async create(
		createTerritoryDto: CreateTerritoryDto
	): Promise<TerritoryEntity> {
		try {
			const data = await this.prisma.territories.create({
				data: createTerritoryDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing territories
	 * @param id string
	 * @param updateTerritoryDto UpdateTerritoryDto
	 * @returns Promise<TerritoryEntity>
	 */
	async update(
		id: string,
		updateTerritoryDto: UpdateTerritoryDto
	): Promise<TerritoryEntity> {
		try {
			const data = await this.prisma.territories.update({
				where: {
					TerritoryID: id
				},
				data: updateTerritoryDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing territories
	 * @param id string
	 * @returns Promise<TerritoryEntity>
	 */
	async remove(id: string): Promise<TerritoryEntity> {
		try {
			const data = await this.prisma.territories.delete({
				where: { TerritoryID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
