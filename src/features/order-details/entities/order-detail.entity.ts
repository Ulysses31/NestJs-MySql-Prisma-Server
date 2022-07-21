import { ApiProperty } from '@nestjs/swagger';
import { order_details as OrderDetail } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

/**
 * OrderDetailEntity class
 * @implements OrderDetail
 */
export class OrderDetailEntity implements OrderDetail {
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

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
