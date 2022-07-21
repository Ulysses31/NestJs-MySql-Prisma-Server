import { ApiProperty } from "@nestjs/swagger";

/**
 * CreateUserDto class
 */
export class CreateUserDto {
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
}
