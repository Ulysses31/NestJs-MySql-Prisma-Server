import { ApiProperty } from '@nestjs/swagger';
import { users as User } from '@prisma/client';

/**
 * UserEntity class
 * @implements User
 */
export class UserEntity implements User {
	@ApiProperty({ type: Number })
	Id: number;

	@ApiProperty({ type: String })
	Username: string;

	@ApiProperty({ type: String })
	Password: string;

	@ApiProperty({ type: String })
	Email: string;

	@ApiProperty({ type: Number })
	Is_Active: number;

	@ApiProperty({ type: String })
	Access_Token: string;

	@ApiProperty({ type: String })
	Refresh_Token: string;

	@ApiProperty({ type: String })
	CreatedBy: string;

	@ApiProperty({ type: Date })
	CreatedAt: Date;

	@ApiProperty({ type: Date })
	UpdatedAt: Date;
}
