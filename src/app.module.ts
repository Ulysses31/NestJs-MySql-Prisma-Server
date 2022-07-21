import { UsersModule } from './features/users/users.module';
import { TerritoriesModule } from './features/territories/territories.module';
import { SuppliersModule } from './features/suppliers/suppliers.module';
import { ShippersModule } from './features/shippers/shippers.module';
import { RegionsModule } from './features/regions/regions.module';
import { ProductsModule } from './features/products/products.module';
import { OrdersModule } from './features/orders/orders.module';
import { EmployeeTerritoriesModule } from './features/employee-territories/employee-territories.module';
import { EmployeesModule } from './features/employees/employees.module';
import { CustomersModule } from './features/customers/customers.module';
import { CustomerDemographicsModule } from './features/customer-demographics/customer-demographics.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './features/categories/categories.module';
import { OrderDetailsModule } from './features/order-details/order-details.module';
import { Module } from '@nestjs/common';
import { getEnvPath } from './shared/shared';

const envFilePath: string = getEnvPath(`${__dirname}`);

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: envFilePath
		}),
		PrismaModule,
		CategoriesModule,
		CustomerDemographicsModule,
		CustomersModule,
		EmployeesModule,
		EmployeeTerritoriesModule,
		OrderDetailsModule,
		OrdersModule,
		ProductsModule,
		RegionsModule,
		ShippersModule,
		SuppliersModule,
		TerritoriesModule,
		UsersModule
	],
	controllers: [],
	providers: []
})
export class AppModule {
	// configure(consumer: MiddlewareConsumer) {
	// 	consumer
	// 		.apply(DbMiddleware)
	// 		.forRoutes(
	// 			'v*/categories',
	// 			'v*/customerDemographics',
	// 			'v*/customers',
	// 			'v*/employeeTerritories',
	// 			'v*/employees',
	// 			'v*/orders',
	// 			'v*/territories',
	// 			'v*/orderDetails',
	// 			'v*/regions',
	// 			'v*/products',
	// 			'v*/suppliers',
	// 			'v*/shippers',
	// 			'v*/users'
	// 		);
	// }
}
