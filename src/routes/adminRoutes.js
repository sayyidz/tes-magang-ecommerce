const express = require("express");
const { login } = require("../controllers/adminController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Endpoint login admin
 */

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Login admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token untuk admin
 */

router.post("/login", login);

module.exports = router;