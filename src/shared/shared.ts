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
	const newErr: string = err.meta?.cause?.length > 0 
		? err.meta?.cause as string 
		: err.message as string;
	Logger.log(newErr);
	return new HttpException(
		{
			error: newErr
		},
		HttpStatus.INTERNAL_SERVER_ERROR
	);
}
