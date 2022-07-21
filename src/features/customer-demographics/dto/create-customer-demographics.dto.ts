// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';

/**
 * CreateCustomerDemographicsDto class
 */
export class CreateCustomerDemographicsDto {
	@ApiProperty({ type: String })
	CustomerTypeID: string;

	@ApiProperty({ type: String })
	CustomerDesc: string;
}
