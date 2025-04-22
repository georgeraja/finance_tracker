import { z } from "zod";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});

export const accountsRelations = relations(accounts, ({ many }) => ({
  transacations: many(transactions),
}));

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

export const categoriesRelations = relations(categories, ({ many }) => ({
  transacations: many(transactions),
}));

export const insertCategorySchema = z.object({
  id: z.string().optional(),
  plaidId: z.string().optional(),
  name: z.string().min(1),
  userId: z.string().min(1),
});

export const transactions = pgTable("transactions", {
  id: text("id").primaryKey(),
  amount: integer("amount").notNull(),
  payee: text("payee").notNull(),
  notes: text("notes"),
  date: timestamp("date", { mode: "date" }).notNull(),
  accountId: text("account_id").references(() => accounts.id, {
    onDelete: "cascade",
  }),
  categoryId: text("category_id").references(() => categories.id, {
    onDelete: "set null",
  }),
});

export const transactionsRelations = relations(transactions, ({ one }) => ({
  account: one(accounts, {
    fields: [transactions.accountId],
    references: [accounts.id],
  }),
  categories: one(categories, {
    fields: [transactions.categoryId],
    references: [categories.id],
  }),
}));

export const insertTransactionSchema = z.object({
  id: z.string().optional(),
  amount: z.number().min(0),
  payee: z.string().min(1),
  notes: z.string().optional(),
  date: z.coerce.date(),
  accountId: z.string().min(1),
  categoryId: z.string().optional(),
});
