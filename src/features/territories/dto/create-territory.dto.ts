import { ApiProperty } from '@nestjs/swagger';

/**
 * CreateTerritoryDto class
 */
export class CreateTerritoryDto {
	@ApiProperty({ type: String })
	TerritoryID: string;

	@ApiProperty({ type: String })
	TerritoryDescription: string;

	@ApiProperty({ type: Number })
	RegionID: number;
}
