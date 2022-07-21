// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
	// create two dummy users
	const usr1 = await prisma.users.upsert({
		where: { Id: 0 },
		update: {},
		create: {
			Username: 'admin',
			Password: 'admin',
			Email: 'admin@datacenter.com',
			Is_Active: 1,
			Access_Token: null,
			Refresh_Token: null,
			CreatedBy: 'admin',
			UpdatedAt: null
		}
	});

	const usr2 = await prisma.users.upsert({
		where: { Id: 0 },
		update: {},
		create: {
			Username: 'guest',
			Password: 'guest',
			Email: 'guest@datacenter.com',
			Is_Active: 0,
			Access_Token: null,
			Refresh_Token: null,
			CreatedBy: 'admin',
			UpdatedAt: null
		}
	});

	console.log({ usr1, usr2 });
}

// execute the main function
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		// close Prisma Client at the end
		await prisma.$disconnect();
	});
