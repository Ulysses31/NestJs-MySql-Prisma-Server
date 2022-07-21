import { ApiProperty } from '@nestjs/swagger';

/**
 * CreateRegionDto class
 */
export class CreateRegionDto {
	@ApiProperty({ type: Number })
	RegionID: number;

	@ApiProperty({ type: String })
	RegionDescription: string;
}
