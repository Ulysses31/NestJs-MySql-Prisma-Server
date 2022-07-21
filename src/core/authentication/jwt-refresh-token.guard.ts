import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * JwtRefreshTokenGuard
 * @extends AuthGuard
 */
@Injectable()
export class JwtRefreshTokenGuard extends AuthGuard(
	'jwt-refresh-token'
) {}
