import { TimeInterceptor } from './core/time.interceptor';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

const swaggerApiPrefix = `${process.env.APP_GLOBAL_PREFIX}`;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
		abortOnError: false,
		logger: ['error', 'warn', 'debug', 'verbose', 'log']
	});

  app.useGlobalInterceptors(new TimeInterceptor());

  app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: '1'
	});

  app.use(cookieParser());

  // app.setGlobalPrefix('v1');

  const config = new DocumentBuilder()
		.setTitle(process.env.SWAGGER_OPENAPI_TITLE)
		.setDescription(process.env.SWAGGER_OPENAPI_DESCRIPTION)
		.setVersion(process.env.SWAGGER_OPENAPI_VERSION)
		.setContact(
			process.env.SWAGGER_OPENAPI_AUTHOR,
			process.env.SWAGGER_OPENAPI_WEBSITE,
			process.env.SWAGGER_OPENAPI_CONTACT
		)
		.setExternalDoc(
			'api-json',
			`http://${process.env.APP_URL}:${process.env.APP_PORT}/${swaggerApiPrefix}-json`
		)
		.setLicense('MIT', '')
		.addServer(
			`http://${process.env.APP_URL}:${process.env.APP_PORT}`
		)
		.addServer(
			`https://${process.env.APP_URL}:${process.env.APP_PORT}`
		)
		// .addSecurity('basic', {
		// 	type: 'http',
		// 	scheme: 'basic'
		// })
		// .addBasicAuth()
		.addBearerAuth()
		.build();

	const customOptions: SwaggerCustomOptions = {
		swaggerOptions: {
			persistAuthorization: true
		},
		customSiteTitle: process.env.SWAGGER_OPENAPI_TAB_TITLE
	};

	const docOptions: SwaggerDocumentOptions = {
		ignoreGlobalPrefix: false,
		operationIdFactory: (controllerKey: string, methodKey: string) =>
			methodKey
	};

	const document = SwaggerModule.createDocument(
		app,
		config,
		docOptions
	);

  SwaggerModule.setup(swaggerApiPrefix, app, document, customOptions);
	await app.listen(process.env.APP_PORT);
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
