import { HttpException, Logger, HttpStatus } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';

/**
 * Handle the response
 * @param data any
 * @returns Promise<any>
 */
export async function handleResponse(data: any): Promise<any> {
	const resp = {
		status: HttpStatus.OK,
		data: data
	};
	Logger.log(resp);
	return resp;
}

/**
 * Error exception handler
 * @param err any
 * @returns HttpException
 */
export function handleError(err: any): HttpException {
	Logger.log(err);
	return new HttpException(
		{
			error: err.message
		},
		HttpStatus.INTERNAL_SERVER_ERROR
	);
}
