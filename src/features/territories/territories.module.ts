import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TerritoriesController } from './territories.controller';
import { TerritoriesService } from './territories.service';

@Module({
	imports: [PrismaModule],
	controllers: [TerritoriesController],
	providers: [TerritoriesService]
})
export class TerritoriesModule {}
