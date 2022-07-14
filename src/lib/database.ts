import Database from 'tauri-plugin-sql-api';
import type { UserType } from '$lib/models/user';

const db = await Database.load('sqlite:database.db');

export async function getAllUsers(): Promise<UserType[]> {
	const query = `--sql
        SELECT * FROM users
    `;
	return await db.select(query);
}
