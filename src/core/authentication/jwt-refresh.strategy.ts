import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

/**
 * JwtRefreshStrategy
 * @extends PassportStrategy
 */
@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
	Strategy,
	'jwt-refresh-token'
) {
	constructor(private confService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
			ignoreExpiration: false,
			secretOrKey: confService.get('JWT_REFRESH_TOKEN_SECRET')
		});
	}

	/**
	 * Validate function
	 * @param payload any
	 * @returns { userId: payload.sub, username: payload.username }
	 */
	async validate(payload: any) {
		return { userId: payload.sub, username: payload.username };
	}
}
