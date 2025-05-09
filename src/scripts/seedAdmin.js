require("dotenv").config();
const { db } = require("../db");
const { admin } = require("../db/schema");
const bcrypt = require("bcrypt");

(async () => {
  const email = "admin@example.com";
  const plainPassword = "admin123";
  const name = "Admin";

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  await db.insert(admin).values({
    email,
    password: hashedPassword,
    name
  });

  console.log("Admin seeded:", email);
  process.exit();
})();
