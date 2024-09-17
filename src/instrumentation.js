import { dbConnection } from './app/_lib/dbConnection'

export async function register() {
    await dbConnection()
}