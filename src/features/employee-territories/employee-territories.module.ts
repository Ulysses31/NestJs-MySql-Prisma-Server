import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmployeeTerritoriesController } from './employee-territories.controller';
import { EmployeeTerritoriesService } from './employee-territories.service';

@Module({
	imports: [PrismaModule],
	controllers: [EmployeeTerritoriesController],
	providers: [EmployeeTerritoriesService]
})
export class EmployeeTerritoriesModule {}
