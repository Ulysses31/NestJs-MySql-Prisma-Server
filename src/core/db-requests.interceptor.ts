import {
	CallHandler,
	ExecutionContext,
	Injectable,
	Logger,
	NestInterceptor
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DbRequestsInterceptor
	extends PrismaService
	implements NestInterceptor
{
	intercept(
		context: ExecutionContext,
		next: CallHandler
	): Observable<any> {
		console.log(context);

		const reqObj = {
			method: context.getArgs()[0].method as string,
			baseUrl: context.getArgs()[0].baseUrl as string,
			originalUrl: context.getArgs()[0].originalUrl as string,
			params: context.getArgs()[0].params as string,
			body: context.getArgs()[0].body as string,
			path: context.getArgs()[0].path as string,
			hostname: context.getArgs()[0].hostname as string,
			httpVersion: context.getArgs()[0].httpVersion as string,
			ip: context.getArgs()[0].ip as string,
			protocol: context.getArgs()[0].protocol as string,
			secure: context.getArgs()[0].secure as string,
			headers: context.getArgs()[0].headers as string
		};

		// Logger.log(reqObj);

		console.log('NODE_ENV: ', process.env.NODE_ENV);

		return next.handle().pipe(
			tap(async (data) => {
				// Insert server requests - responses into database
				await this.server_requests.upsert({
					where: { Id: 0 },
					update: {},
					create: {
						Method: reqObj.method,
						BaseUrl: reqObj.baseUrl,
						OriginalUrl: reqObj.originalUrl,
						Params: JSON.stringify(reqObj.params),
						Body: JSON.stringify(reqObj.body),
						Path: reqObj.path,
						Hostname: reqObj.hostname,
						HttpVersion: reqObj.httpVersion,
						Ip: reqObj.ip,
						Protocol: reqObj.protocol,
						Secure: JSON.stringify(reqObj.secure),
						Headers: JSON.stringify(reqObj.headers),
						Response: JSON.stringify(data)
					}
				});
			})
		);
	}
}
