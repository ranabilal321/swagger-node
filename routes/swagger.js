const swaggerJsdoc = require('swagger-jsdoc');

const IceCream = './controllers/IceCreamController.js';
const Cookie = './controllers/CookieController.js'

const APP_HOST_URL = process.env.APP_HOST_URL || 'localhost:3000';

const options = {
  apis: [
    IceCream, 
    Cookie
  ],
  swaggerDefinition: {
    info: {
      description: '',
      title: 'Swagger-Node-API-Docs',
      version: 'v1',
    },
    host: APP_HOST_URL,
    basePath: '/api',
  },
};
const specs = swaggerJsdoc(options);
module.exports = specs;