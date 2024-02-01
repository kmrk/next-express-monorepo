import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/index';

export const connection = postgres(`${'postgresql://db_user:db_password@database:5432/repo_db'}`); //;?sslmode=require`);
export const db = drizzle(connection, { schema });


// 为了简便使用，没使用alias
export * from './schema/index'; 