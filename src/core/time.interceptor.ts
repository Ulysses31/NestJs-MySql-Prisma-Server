import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
	Logger
} from '@nestjs/common';
import { catchError, map, Observable, of, tap } from 'rxjs';

/**
 * Execution time calculation
 */
@Injectable()
export class TimeInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		next: CallHandler
	): Observable<any> {
		const {
			now,
			ref,
			handler
		}: { now: number; ref: string; handler: string } =
			this.calcBeforeTime(context);

		return next.handle().pipe(
			tap((res) => {
				this.calcAfterTime(now, res, ref, handler);
			}),
			map((res) => res),
			catchError((res) => {
				this.calcAfterTime(now, res, ref, handler);
				return of(res);
			})
		);
	}

	/**
	 * Before time calculation
	 * @param context ExecutionContext
	 * @returns { now, ref, handler }
	 */
	private calcBeforeTime(context: ExecutionContext) {
		const ref: string = context['constructorRef'].name as string;
		const handler: string = context['handler'].name as string;
		Logger.log(`Before execute... [${ref}] - [${handler}]`);

		const now = Date.now();
		return { now, ref, handler };
	}

	/**
	 * After time calculation
	 * @param now number
	 * @param res any
	 * @param ref string
	 * @param handler string
	 */
	private calcAfterTime(
		now: number,
		res: any,
		ref: string,
		handler: string
	) {
		const tm = Date.now() - now;
		res.executionTime = `${tm}ms`;
		Logger.log(`After execute... [${ref}] - [${handler}] ${tm}ms`);
	}
}
