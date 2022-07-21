import { ApiProperty } from '@nestjs/swagger';
import { shippers as Shipper } from '@prisma/client';

/**
 * ShipperEntity class
 * @implements Shipper
 */
export class ShipperEntity implements Shipper {
	@ApiProperty({ type: Number })
	ShipperID: number;

	@ApiProperty({ type: String })
	CompanyName: string;

	@ApiProperty({ type: String })
	Phone: string;

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
