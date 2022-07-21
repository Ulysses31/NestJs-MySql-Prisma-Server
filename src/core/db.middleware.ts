import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * Database middleware
 */
@Injectable()
export class DbMiddleware implements NestMiddleware {
	constructor(private prisma: PrismaService) {}

	async use(req: any, res: any, next: () => void) {
		// console.log(req);
		const reqObj = {
			method: req.method as string,
			baseUrl: req.baseUrl as string,
			originalUrl: req.originalUrl as string,
			params: req.params as string,
			body: req.body as string,
			path: req.path as string,
			hostname: req.hostname as string,
			httpVersion: req.httpVersion as string,
			ip: req.ip as string,
			protocol: req.protocol as string,
			secure: req.secure as string,
			headers: req.headers as string
		};

		Logger.log(reqObj);

		// Insert server requests into database
		await this.prisma.server_requests.upsert({
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
				Headers: JSON.stringify(reqObj.headers)
			}
		});

		next();
	}
}
