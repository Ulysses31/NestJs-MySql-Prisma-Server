import { ApiProperty } from '@nestjs/swagger';
import { region as Region } from '@prisma/client';

/**
 * RegionEntity class
 * @implements Region
 */
export class RegionEntity implements Region {
	@ApiProperty({ type: Number })
	RegionID: number;

	@ApiProperty({ type: String })
	RegionDescription: string;

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
