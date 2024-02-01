import { sql } from 'drizzle-orm';
import { pgTable, smallint, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { basicColumns } from './_basic';

// lucia session strore
export const sessions = pgTable("sessions", {
  // ...basicColumns,
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date"
  }).notNull()
});

//lucia user store & app user store
export const users = pgTable('users', {
  ...basicColumns,
  password: varchar('password', { length: 256 }).notNull(),
  phone: varchar('phone', { length: 64 }).notNull(),
  avatar: varchar('avatar', { length: 256 }).default('avatar_default.png'),
  role: varchar('role', { length: 64 }).default('user'),
});