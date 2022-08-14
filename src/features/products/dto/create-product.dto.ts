import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

/**
 * CreateProductDto class
 */
export class CreateProductDto {
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

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
