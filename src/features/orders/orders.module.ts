import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
