const { db } = require("../db");
const { admin } = require("../db/schema");
const { eq } = require("drizzle-orm");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  const [user] = await db
  .select()
  .from(admin)
  .where(eq(admin.email, email));

  if (!user) return res.status(401).json({ error: "Email not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign(
    { id: user.id, email: user.email }, 
    process.env.JWT_SECRET, 
    { expiresIn: "2h" }
    );

  res.json({ token });
};

module.exports = {
    login
}