import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './services/auth.service';

/**
 * LocalStrategy
 * @extends PassportStrategy
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super();
	}

	/**
	 * Validate function
	 * @param username string
	 * @param password string
	 * @returns Promise<any>
	 */
	async validate(username: string, password: string): Promise<any> {
		const user = await this.authService.validateUser(
			username,
			password
		);

		if (!user) {
			throw new UnauthorizedException();
		}

		return user;
	}
}
