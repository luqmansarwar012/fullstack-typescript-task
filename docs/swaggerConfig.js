const swaggerJSDoc = require("swagger-jsdoc");

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fullstack task",
      version: "1.0.0",
      description:
        "APIs for searching github repo,users and type furthermore clear-cache",
    },
  },
  apis: ["./routes/index.js", "./docs/swaggerDocs.yaml"],
};

module.exports = swaggerJSDoc(swaggerOptions);
