import { ApiProperty } from '@nestjs/swagger';
import { products as Product } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

/**
 * ProductEntity class
 * @implements Product
 */
export class ProductEntity implements Product {
	@ApiProperty({ type: Number })
	ProductID: number;

	@ApiProperty({ type: String })
	ProductName: string;

	@ApiProperty({ type: Number })
	SupplierID: number;

	@ApiProperty({ type: Number })
	CategoryID: number;

	@ApiProperty({ type: String })
	QuantityPerUnit: string;

	@ApiProperty({ type: Decimal })
	UnitPrice: Decimal;

	@ApiProperty({ type: Number })
	UnitsInStock: number;

	@ApiProperty({ type: Number })
	UnitsOnOrder: number;

	@ApiProperty({ type: Number })
	ReorderLevel: number;

	@ApiProperty({ type: Boolean })
	Discontinued: boolean;

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
