const { db } = require("../db");
const { orders, products } = require("../db/schema");
const { eq } = require("drizzle-orm");

const getAll = async (req, res) => {
  const all = await db
  .select()
  .from(orders);
  res.json(all);
};

const create = async (req, res) => {
  const { product_id, quantity } = req.body;
  const [product] = await db
    .select()
    .from(products)
    .where(eq(products.id, product_id));
    
  if (!product) return res.status(404).json({ error: "Product not found" });

  const totalPrice = (Number(product.price) * quantity).toFixed(2);
  const [order] = await db
    .insert(orders)
    .values({
      productId: product_id,
      quantity,
      totalPrice,
    })
    .returning();

  res.status(201).json(order);
};

module.exports = {
  getAll,
  create
};
