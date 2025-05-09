const { db } = require("../db");
const { products } = require("../db/schema");
const { eq } = require("drizzle-orm");

const getAll = async (req, res) => {
  const all = await db
  .select()
  .from(products);
  res.json(all);
};

const create = async (req, res) => {
  const { name, description, price } = req.body;
  const [result] = await db
  .insert(products)
  .values({ name, description, price })
  .returning();
  res.status(201).json(result);
};

const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description, price } = req.body;
  const [result] = await db
  .update(products)
  .set({ name, description, price })
  .where(eq(products.id, id))
  .returning();
  res.json(result);
};

const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  await db
  .delete(products)
  .where(eq(products.id, id));
  res.status(204).send();
};

module.exports = {
  getAll,
  create,
  update,
  remove
};
