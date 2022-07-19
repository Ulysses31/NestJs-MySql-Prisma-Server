import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError, handleResponse } from 'src/shared/shared';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleEntity } from './entities/article.entity';

@Injectable()
export class ArticlesService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Get list of articles
	 * @returns Promise<ArticleEntity[]>
	 */
	async findAll(): Promise<ArticleEntity[]> {
		try {
			const data = await this.prisma.article.findMany({
				where: { published: true }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get article by id
	 * @param id number
	 * @returns Promise<ArticleEntity>
	 */
	async findOne(id: number): Promise<ArticleEntity> {
		try {
			const data = await this.prisma.article.findUnique({
				where: { id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Get list of unpublished articles
	 * @returns Promise<ArticleEntity[]>
	 */
	async findDrafts(): Promise<ArticleEntity[]> {
		try {
			const data = await this.prisma.article.findMany({
				where: { published: false }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create new article
	 * @param createArticleDto CreateArticleDto
	 * @returns Promise<ArticleEntity>
	 */
	async create(
		createArticleDto: CreateArticleDto
	): Promise<ArticleEntity> {
		try {
			const data = await this.prisma.article.create({
				data: createArticleDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update existing article
	 * @param id number
	 * @param updateArticleDto UpdateArticleDto
	 * @returns Promise<ArticleEntity>
	 */
	async update(
		id: number,
		updateArticleDto: UpdateArticleDto
	): Promise<ArticleEntity> {
		try {
			const data = await this.prisma.article.update({
				where: {
					id: id
				},
				data: updateArticleDto
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Delete existing article
	 * @param id number
	 * @returns Promise<ArticleEntity>
	 */
	async remove(id: number): Promise<ArticleEntity> {
		try {
			const data = await this.prisma.article.delete({
				where: { id }
			});
			return await handleResponse(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
