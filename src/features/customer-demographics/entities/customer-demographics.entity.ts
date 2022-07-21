import { ApiProperty } from '@nestjs/swagger';
import { customerdemographics as CustomerDemographics } from '@prisma/client';

/**
 * CustomerDemographicsEntity class
 * @implements CustomerDemographics
 */
export class CustomerDemographicsEntity
	implements CustomerDemographics
{
	@ApiProperty({ type: String })
	CustomerTypeID: string;

	@ApiProperty({ type: String })
	CustomerDesc: string;

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
