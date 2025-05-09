# 🛍 E-Commerce API with Express.js, PostgreSQL, and Drizzle ORM

This project is a RESTful API built using **Express.js**, **PostgreSQL**, and **Drizzle ORM**. It includes authentication for both admin and user using **JWT**, product and order management, and full API documentation with **Swagger**.

---

## 🚀 Features

* ✅ User registration and login
* ✅ Admin login
* ✅ Product CRUD (protected)
* ✅ Order creation (user-based)
* ✅ JWT authentication middleware
* ✅ Swagger API docs (`/api-docs`)
* ✅ Environment configuration using `.env`

---

## 🧠 Technologies Used

* [Express.js](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Drizzle ORM](https://orm.drizzle.team/)
* [JWT](https://jwt.io/)
* [Swagger](https://swagger.io/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

---

## 🛆 Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

---

## ⚙️ Configuration

Create a `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/ecommerce_db
JWT_SECRET=your_secret_key
PORT=3000
```

Run migration (Drizzle):

```bash
npx drizzle-kit push
```

(Or run the seed script for initial admin)

---

## 🧲 Running the Project

```bash
npm start
```

or for development:

```bash
npm run dev
```

---

## 📚 API Documentation

Swagger UI is available at:

```
http://localhost:3000/api-docs
```

---

## 🗻 Example Endpoints

### 🔐 Auth

* `POST /admin/login` – Login admin (returns token)

### 🛆 Products (JWT required)

* `GET /products`
* `POST /products`
* `PUT /products/:id`
* `DELETE /products/:id`

### 📟 Orders

* `GET /orders`
* `POST /orders`

---

## 🛡️ Security Notes

* Passwords are hashed using `bcrypt`
* All protected routes require `Authorization: Bearer <token>`

---

## 🧑‍💻 Developer Notes

To create a default admin, use a seeder script:

```bash
node src/scripts/seedAdmin.js
```

---


