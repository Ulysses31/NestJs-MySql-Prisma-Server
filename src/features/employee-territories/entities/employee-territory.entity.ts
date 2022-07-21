import { ApiProperty } from '@nestjs/swagger';
import { employeeterritories as EmployeeTerritory } from '@prisma/client';

/**
 * EmployeeTerritoryEntity class
 * @implements EmployeeTerritory
 */
export class EmployeeTerritoryEntity implements EmployeeTerritory {
	@ApiProperty({ type: Number })
	EmployeeID: number;

	@ApiProperty({ type: String })
	TerritoryID: string;

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
