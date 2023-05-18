const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de ejemplo',
      version: '1.0.0',
      description: 'Documentación de la API de ejemplo',
    },
  },
  apis: ['./routes/*.js'], // Ruta a tus archivos de rutas donde están definidos los endpoints
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = (app) => {
  // Ruta para la documentación Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
