import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * LocalAuthGuard class
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
