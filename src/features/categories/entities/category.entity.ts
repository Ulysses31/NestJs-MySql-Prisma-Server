import { ApiProperty } from '@nestjs/swagger';
import { categories as Category } from '@prisma/client';

/**
 * CategoryEntity class
 * @implements Category
 */
export class CategoryEntity implements Category {
	@ApiProperty({ type: Number })
	CategoryID: number;

	@ApiProperty({ type: String })
	CategoryName: string;

	@ApiProperty({ type: String })
	Description: string;

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
