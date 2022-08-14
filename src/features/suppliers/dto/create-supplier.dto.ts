import { ApiProperty } from '@nestjs/swagger';

/**
 * CreateSupplierDto class
 */
export class CreateSupplierDto {
	@ApiProperty({ type: Number })
	Id: number;

	@ApiProperty({ type: String })
	CompanyName: string;

	@ApiProperty({ type: String })
	ContactName: string;

	@ApiProperty({ type: String })
	ContactTitle: string;

	@ApiProperty({ type: String })
	Address: string;

	@ApiProperty({ type: String })
	City: string;

	@ApiProperty({ type: String })
	Region: string;

	@ApiProperty({ type: String })
	PostalCode: string;

	@ApiProperty({ type: String })
	Country: string;

	@ApiProperty({ type: String })
	Phone: string;

	@ApiProperty({ type: String })
	Fax: string;

	@ApiProperty({ type: String })
	HomePage: string;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
