import { ApiProperty } from '@nestjs/swagger';

/**
 * CreateEmployeeTerritoryDto class
 */
export class CreateEmployeeTerritoryDto {
	@ApiProperty({ type: Number })
	EmployeeID: number;

	@ApiProperty({ type: String })
	TerritoryID: string;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
