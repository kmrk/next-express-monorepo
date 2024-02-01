import { sql } from 'drizzle-orm';
import { pgTable, smallint, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const basicColumns = {
  id: text('id').default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar('name', { length: 256 }).default('').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  active: smallint('active').default(1).notNull(),
};
