const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "E-Commerce API",
    version: "1.0.0",
    description: "API untuk mengelola products dan orders"
  },
  servers: [
    {
      url: "http://localhost:3000"
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"]
};

swaggerDefinition.components = {
  schemas: {
    Product: {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        description: { type: "string" },
        price: { type: "number", format: "float" }
      }
    },
    ProductInput: {
      type: "object",
      required: ["name", "description", "price"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        price: { type: "number", format: "float" }
      }
    },
    Order: {
      type: "object",
      properties: {
        id: { type: "integer" },
        productId: { type: "integer" },
        quantity: { type: "integer" },
        totalPrice: { type: "string" },
        createdAt: { type: "string", format: "date-time" }
      }
    },
    OrderInput: {
      type: "object",
      required: ["product_id", "quantity"],
      properties: {
        product_id: { type: "integer" },
        quantity: { type: "integer" }
      }
    }
  }
};


const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
