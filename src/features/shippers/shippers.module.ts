import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ShippersController } from './shippers.controller';
import { ShippersService } from './shippers.service';

@Module({
	imports: [PrismaModule],
	controllers: [ShippersController],
	providers: [ShippersService]
})
export class ShippersModule {}
