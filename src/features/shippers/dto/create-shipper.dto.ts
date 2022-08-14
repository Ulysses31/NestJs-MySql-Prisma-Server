import { ApiProperty } from '@nestjs/swagger';

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

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
