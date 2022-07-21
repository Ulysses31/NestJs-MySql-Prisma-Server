import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeEntity } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of Employees
	 * @returns Promise<EmployeeEntity[]>
	 */
	async findAll(): Promise<EmployeeEntity[]> {
		try {
			const data = await this.prisma.employees.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get employees by id
	 * @param id number
	 * @returns Promise<EmployeeEntity>
	 */
	async findOne(id: number): Promise<EmployeeEntity> {
		try {
			const data = await this.prisma.employees.findFirstOrThrow({
				where: { EmployeeID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new employees
	 * @param createEmployeeDto CreateEmployeeDto
	 * @returns Promise<EmployeeEntity>
	 */
	async create(
		createEmployeeDto: CreateEmployeeDto
	): Promise<EmployeeEntity> {
		try {
			const data = await this.prisma.employees.create({
				data: createEmployeeDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing employees
	 * @param id number
	 * @param updateEmployeeDto UpdateEmployeeDto
	 * @returns Promise<EmployeeEntity>
	 */
	async update(
		id: number,
		updateEmployeeDto: UpdateEmployeeDto
	): Promise<EmployeeEntity> {
		try {
			const data = await this.prisma.employees.update({
				where: {
					EmployeeID: id
				},
				data: updateEmployeeDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing employees
	 * @param id number
	 * @returns Promise<EmployeeEntity>
	 */
	async remove(id: number): Promise<EmployeeEntity> {
		try {
			const data = await this.prisma.employees.delete({
				where: { EmployeeID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
