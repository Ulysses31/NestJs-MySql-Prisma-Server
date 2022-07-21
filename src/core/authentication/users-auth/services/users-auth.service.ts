import { Injectable } from '@nestjs/common';
import { users as UsersModel } from '@prisma/client';

/**
 * UsersAuthService
 */
@Injectable()
export class UsersAuthService {
	private readonly users: UsersModel[] = [
		{
			Id: 1,
			Username: 'john',
			Password: 'changeme',
			Email: 'admin@test.com',
			Is_Active: 1,
			Access_Token: '',
			Refresh_Token: '',
			CreatedBy: '',
			CreatedAt: new Date(),
			UpdatedAt: null
		},
		{
			Id: 2,
			Username: 'maria',
			Password: 'guess',
			Email: 'test@test.com',
			Is_Active: 1,
			Access_Token: '',
			Refresh_Token: '',
			CreatedBy: '',
			CreatedAt: new Date(),
			UpdatedAt: null
		}
	];

	/**
	 * Find by username
	 * @param username string
	 * @returns Promise<UsersModel | undefined>
	 */
	async findOne(username: string): Promise<UsersModel | undefined> {
		return this.users.find(
			(user: UsersModel) => user.Username === username
		);
	}

	/**
	 * Find by email
	 * @param email string
	 * @returns Promise<UsersModel | undefined>
	 */
	async findByEmail(email: string): Promise<UsersModel | undefined> {
		return this.users.find(
			(user: UsersModel) => user.Email === email
		);
	}

	/**
	 * UupdateUsersTokens
	 * @param id string
	 * @param access_token string
	 * @param refresh_token string
	 * @returns Promise<UsersModel | undefined>
	 */
	async updateUsersTokens(
		id: number,
		access_token: string,
		refresh_token: string
	): Promise<UsersModel | undefined> {
		const usr: UsersModel = this.users.find((item) => item.Id === id);
		usr.Access_Token = access_token;
		usr.Refresh_Token = refresh_token;
		return usr;
	}
}
