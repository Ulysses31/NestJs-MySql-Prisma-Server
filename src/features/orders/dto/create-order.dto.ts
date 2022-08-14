import { Decimal } from '@prisma/client/runtime';
import { ApiProperty } from '@nestjs/swagger';

/**
 * CreateOrderDto class
 */
export class CreateOrderDto {
	@ApiProperty({ type: Number })
	OrderID: number;

	@ApiProperty({ type: String })
	CustomerID: string;

	@ApiProperty({ type: Number })
	EmployeeID: number;

	@ApiProperty({ type: Date })
	OrderDate: Date;

	@ApiProperty({ type: Date })
	RequiredDate: Date;

	@ApiProperty({ type: Date })
	ShippedDate: Date;

	@ApiProperty({ type: Number })
	ShipVia: number;

	@ApiProperty({ type: Decimal })
	Freight: Decimal;

	@ApiProperty({ type: String })
	ShipName: string;

	@ApiProperty({ type: String })
	ShipAddress: string;

	@ApiProperty({ type: String })
	ShipCity: string;

	@ApiProperty({ type: String })
	ShipRegion: string;

	@ApiProperty({ type: String })
	ShipPostalCode: string;

	@ApiProperty({ type: String })
	ShipCountry: string;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
