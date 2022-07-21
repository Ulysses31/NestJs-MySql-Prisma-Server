import { ApiProperty } from '@nestjs/swagger';
import { employees as Employee } from '@prisma/client';

/**
 * EmployeeEntity class
 * @implements Employee
 */
export class EmployeeEntity implements Employee {
	@ApiProperty({ type: String })
	EmployeeID: number;

	@ApiProperty({ type: String })
	LastName: string;

	@ApiProperty({ type: String })
	FirstName: string;

	@ApiProperty({ type: String })
	Title: string;

	@ApiProperty({ type: String })
	TitleOfCourtesy: string;

	@ApiProperty({ type: Date })
	BirthDate: Date;

	@ApiProperty({ type: Date })
	HireDate: Date;

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
	HomePhone: string;

	@ApiProperty({ type: String })
	Extension: string;

	@ApiProperty({ type: String })
	Notes: string;

	@ApiProperty({ type: Number })
	ReportsTo: number;

	@ApiProperty({ type: String })
	PhotoPath: string;

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
