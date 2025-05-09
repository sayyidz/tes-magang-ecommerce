const { pgTable, serial, varchar, text, decimal, integer, timestamp } = require("drizzle-orm/pg-core");

const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 })
});

const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").references(() => products.id, { onDelete: "cascade" }),
  quantity: integer("quantity"),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow()
});

const admin = pgTable("admin", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  password: text("password").notNull(),
  name: varchar("name", { length: 100 }),
});

module.exports = {
  products,
  orders,
  admin
};
