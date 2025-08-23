import { pgTable, text, timestamp, varchar, uuid } from 'drizzle-orm/pg-core';

export const userDrizzleSchema = pgTable('user', {
  id: uuid('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type UserDrizzleSchema = typeof userDrizzleSchema.$inferSelect;
export type NewUserDrizzleSchema = typeof userDrizzleSchema.$inferInsert;
