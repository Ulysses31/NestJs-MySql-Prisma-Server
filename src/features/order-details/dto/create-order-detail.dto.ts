import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

/**
 * CreateOrderDetailDto class
 */
export class CreateOrderDetailDto {
	@ApiProperty({ type: Number })
	OrderID: number;

	@ApiProperty({ type: Number })
	ProductID: number;

	@ApiProperty({ type: Decimal })
	UnitPrice: Decimal;

	@ApiProperty({ type: Number })
	Quantity: number;

	@ApiProperty({ type: Number })
	Discount: number;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
