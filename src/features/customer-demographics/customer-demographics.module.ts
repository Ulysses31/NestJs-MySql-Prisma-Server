import { CustomerDemographicsController } from './customer-demographics.controller';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CustomerDemographicsService } from './customer-demographics.service';

@Module({
	imports: [PrismaModule],
	controllers: [CustomerDemographicsController],
	providers: [CustomerDemographicsService]
})
export class CustomerDemographicsModule {}
