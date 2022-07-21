import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [EmployeesController],
	providers: [EmployeesService]
})
export class EmployeesModule {}
