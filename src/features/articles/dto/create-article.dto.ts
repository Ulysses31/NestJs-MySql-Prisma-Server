// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';

/**
 * CreateArticleDto class
 */
export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
