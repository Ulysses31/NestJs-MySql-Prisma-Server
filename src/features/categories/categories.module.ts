import { CategoriesService } from './categories.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoriesController } from './categories.controller';

@Module({
	imports: [PrismaModule],
	controllers: [CategoriesController],
	providers: [CategoriesService]
})
export class CategoriesModule {}
