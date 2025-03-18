import { z } from "zod";
import { pgTable, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});

export const insertAccountSchema = z.object({
  id: z.string().optional(),
  plaidId: z.string().optional(),
  name: z.string().min(1),
  userId: z.string().min(1),
});

export const categories = pgTable("categories", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});

export const insertCategorySchema = z.object({
  id: z.string().optional(),
  plaidId: z.string().optional(),
  name: z.string().min(1),
  userId: z.string().min(1),
});

// export const insertAccountSchema = createInsertSchema(accounts);
