// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';

/**
 * CreateCategoryDto class
 */
export class CreateCategoryDto {
	@ApiProperty({ type: Number })
	CategoryID: number;

	@ApiProperty({ type: String })
	CategoryName: string;

	@ApiProperty({ type: String })
	Description: string;
}
