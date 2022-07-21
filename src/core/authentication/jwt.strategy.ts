import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

/**
 * JwtStrategy
 * @extends PassportStrategy(Strategy, 'jwt')
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	constructor(private confService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: confService.get('JWT_TOKEN_SECRET')
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
