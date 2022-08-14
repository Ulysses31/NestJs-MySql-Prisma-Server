import { CustomerDemographicsEntity } from './entities/customer-demographics.entity';
import { UpdateCustomerDemographicsDto } from './dto/update-customer-demographics.dto';
import { CreateCustomerDemographicsDto } from './dto/create-customer-demographics.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';

@Injectable()
export class CustomerDemographicsService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of CustomerDemographics
	 * @returns Promise<CcustomerDemographicsEntity[]>
	 */
	async findAll(): Promise<CustomerDemographicsEntity[]> {
		try {
			const data = await this.prisma.customerdemographics.findMany();
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get customer demographic by id
	 * @param id string
	 * @returns Promise<CcustomerDemographicsEntity>
	 */
	async findOne(id: string): Promise<CustomerDemographicsEntity> {
		try {
			const data =
				await this.prisma.customerdemographics.findFirstOrThrow({
					where: { CustomerTypeID: id }
				});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new customer demographic
	 * @param createCcustomerDemographicsDto CreateCcustomerDemographicsDto
	 * @returns Promise<CcustomerDemographicsEntity>
	 */
	async create(
		createCcustomerDemographicsDto: CreateCustomerDemographicsDto
	): Promise<CustomerDemographicsEntity> {
		try {
			const data = await this.prisma.customerdemographics.create({
				data: createCcustomerDemographicsDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing customer demographic
	 * @param id string
	 * @param updateCcustomerDemographicsDto UpdateCcustomerDemographicsDto
	 * @returns Promise<CcustomerDemographicsEntity>
	 */
	async update(
		id: string,
		updateCustomerDemographicsDto: UpdateCustomerDemographicsDto
	): Promise<CustomerDemographicsEntity> {
		try {
			updateCustomerDemographicsDto.UpdatedAt = new Date();
			const data = await this.prisma.customerdemographics.update({
				where: {
					CustomerTypeID: id
				},
				data: updateCustomerDemographicsDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing customer demographic
	 * @param id string
	 * @returns Promise<CcustomerDemographicsEntity>
	 */
	async remove(id: string): Promise<CustomerDemographicsEntity> {
		try {
			const data = await this.prisma.customerdemographics.delete({
				where: { CustomerTypeID: id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
