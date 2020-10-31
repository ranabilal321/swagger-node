//Imports
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

//Environment
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//ApiDocs Routes
const swaggerRoutes = require('./routes/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerRoutes));

//Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

//Server
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Running on port ${port}`)});