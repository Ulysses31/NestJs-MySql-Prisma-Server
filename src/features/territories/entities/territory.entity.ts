import { ApiProperty } from '@nestjs/swagger';
import { territories as Territory } from '@prisma/client';

/**
 * TerritoryEntity class
 * @implements Territory
 */
export class TerritoryEntity implements Territory {
	@ApiProperty({ type: String })
	TerritoryID: string;

	@ApiProperty({ type: String })
	TerritoryDescription: string;

	@ApiProperty({ type: Number })
	RegionID: number;

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
