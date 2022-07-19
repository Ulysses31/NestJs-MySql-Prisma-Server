import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@prisma/client';

/**
 * ArticleEntity class
 * @implements Article
 */
export class ArticleEntity implements Article {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  description: string;

  @ApiProperty({ type: String })
  body: string;

  @ApiProperty({ type: Boolean })
  published: boolean;

  @ApiProperty({ type: String })
  createdBy: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}
