import { HttpException, Logger, HttpStatus } from '@nestjs/common';
import { existsSync } from 'fs';
import { resolve } from 'path';

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
	const newErr: string =
		err.meta?.cause?.length > 0
			? (err.meta?.cause as string)
			: (err.message as string);
	Logger.log(newErr);
	return new HttpException(
		{
			error: newErr
		},
		HttpStatus.INTERNAL_SERVER_ERROR
	);
}

/**
 * Returns the environment file path
 * @param dest string
 * @returns string
 */
export function getEnvPath(dest: string): string {
	const env: string | undefined = process.env.NODE_ENV.trim();
	const fallback: string = resolve(`${dest}/.env`);
	const filename: string = env ? `.env.${env}` : '.env.development';
	let filePath: string = resolve(`${dest}/${filename}`);

	if (!existsSync(filePath)) {
		filePath = fallback;
	}

	return filePath;
}
