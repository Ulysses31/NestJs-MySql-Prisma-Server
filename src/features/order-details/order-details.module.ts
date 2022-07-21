import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrderDetailsController } from './order-details.controller';
import { OrderDetailsService } from './order-details.service';

@Module({
  imports: [PrismaModule],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService]
})
export class OrderDetailsModule {}
