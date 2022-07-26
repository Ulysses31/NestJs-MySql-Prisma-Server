import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateEmployeeTerritoryDto } from './dto/create-employee-territory.dto';
import { UpdateEmployeeTerritoryDto } from './dto/update-employee-territory.dto';
import { EmployeeTerritoryEntity } from './entities/employee-territory.entity';

@Injectable()
export class EmployeeTerritoriesService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of EmployeeTerritories
	 * @returns Promise<EmployeeTerritoryEntity[]>
	 */
	async findAll(): Promise<EmployeeTerritoryEntity[]> {
		try {
			const data = await this.prisma.employeeterritories.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get categories by id
	 * @param id number
	 * @returns Promise<EmployeeTerritoryEntity>
	 */
	async findOne(id: number): Promise<EmployeeTerritoryEntity> {
		try {
			const data =
				await this.prisma.employeeterritories.findFirstOrThrow({
					where: { Id: id }
				});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new categories
	 * @param createEmployeeTerritoryDto CreateEmployeeTerritoryDto
	 * @returns Promise<EmployeeTerritoryEntity>
	 */
	async create(
		createEmployeeTerritoryDto: CreateEmployeeTerritoryDto
	): Promise<EmployeeTerritoryEntity> {
		try {
			if (createEmployeeTerritoryDto.EmployeeID) {
				createEmployeeTerritoryDto.EmployeeID = parseInt(
					createEmployeeTerritoryDto.EmployeeID.toString()
				);
			}
			const data = await this.prisma.employeeterritories.create({
				data: createEmployeeTerritoryDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing categories
	 * @param id number
	 * @param updateEmployeeTerritoryDto UpdateEmployeeTerritoryDto
	 * @returns Promise<EmployeeTerritoryEntity>
	 */
	async update(
		id: number,
		updateEmployeeTerritoryDto: UpdateEmployeeTerritoryDto
	): Promise<EmployeeTerritoryEntity> {
		try {
			updateEmployeeTerritoryDto.UpdatedAt = new Date();
			if (updateEmployeeTerritoryDto.EmployeeID) {
				updateEmployeeTerritoryDto.EmployeeID = parseInt(
					updateEmployeeTerritoryDto.EmployeeID.toString()
				);
			}
			const dto: any = await this.findOne(id);
			const data = await this.prisma.employeeterritories.update({
				where: {
					Id_EmployeeID_TerritoryID: {
						Id: dto.data.Id,
						EmployeeID: dto.data.EmployeeID,
						TerritoryID: dto.data.TerritoryID
					}
				},
				data: updateEmployeeTerritoryDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing categories
	 * @param id number
	 * @returns Promise<EmployeeTerritoryEntity>
	 */
	async remove(id: number): Promise<EmployeeTerritoryEntity> {
		try {
			const dto =
				await this.prisma.employeeterritories.findFirstOrThrow({
					where: { Id: id }
				});
			const data = await this.prisma.employeeterritories.delete({
				where: {
					Id_EmployeeID_TerritoryID: {
						Id: id,
						EmployeeID: dto.EmployeeID,
						TerritoryID: dto.TerritoryID
					}
				}
			});
			return await handleResponse(data);
			return null;
		} catch (err) {
			throw handleError(err);
		}
	}
}
