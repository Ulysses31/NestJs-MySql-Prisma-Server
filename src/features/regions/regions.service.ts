import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { RegionEntity } from './entities/region.entity';

@Injectable()
export class RegionsService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Regions
	 * @returns Promise<RegionEntity[]>
	 */
	async findAll(): Promise<RegionEntity[]> {
		try {
			const data = await this.prisma.region.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get regions by id
	 * @param id number
	 * @returns Promise<RegionEntity>
	 */
	async findOne(id: number): Promise<RegionEntity> {
		try {
			const data = await this.prisma.region.findFirstOrThrow({
				where: { RegionID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new regions
	 * @param createRegionDto CreateRegionDto
	 * @returns Promise<RegionEntity>
	 */
	async create(
		createRegionDto: CreateRegionDto
	): Promise<RegionEntity> {
		try {
			const data = await this.prisma.region.create({
				data: createRegionDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing regions
	 * @param id number
	 * @param updateRegionDto UpdateRegionDto
	 * @returns Promise<RegionEntity>
	 */
	async update(
		id: number,
		updateRegionDto: UpdateRegionDto
	): Promise<RegionEntity> {
		try {
			const data = await this.prisma.region.update({
				where: {
					RegionID: id
				},
				data: updateRegionDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing regions
	 * @param id number
	 * @returns Promise<RegionEntity>
	 */
	async remove(id: number): Promise<RegionEntity> {
		try {
			const data = await this.prisma.region.delete({
				where: { RegionID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
