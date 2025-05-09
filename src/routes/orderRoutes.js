const express = require("express");
const router = express.Router();
const { create, getAll } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Manajemen pesanan

 * /orders:
 *   get:
 *     summary: Ambil semua pesanan
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Daftar semua pesanan
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'

 *   post:
 *     summary: Buat pesanan baru
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       201:
 *         description: Pesanan berhasil dibuat
 */

router.get("/", getAll);
router.post("/", create);

module.exports = router;
