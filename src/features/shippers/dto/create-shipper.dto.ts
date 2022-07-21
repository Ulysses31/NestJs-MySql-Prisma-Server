import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

/**
 * CreateShipperDto class
 */
export class CreateShipperDto {
	@ApiProperty({ type: Number })
	ShipperID: number;

	@ApiProperty({ type: String })
	CompanyName: string;

	@ApiProperty({ type: String })
	Phone: string;
}
