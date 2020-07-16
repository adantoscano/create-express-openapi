const app = require('express')();
const bodyParser = require('body-parser');
const openapi = require('express-openapi');
const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

app.use(cors());
app.use(bodyParser.json());

const { apiDoc } = openapi.initialize({
  apiDoc: require('./api-doc.js'),
  app: app,
  paths: path.resolve(__dirname, 'api-routes')
});

app.use(function(err, req, res, next) {
  res.status(err.status).json(err);
});

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(apiDoc),
);

const port = parseInt(process.argv[2], 10);
app.listen(port || 3000);
console.log(`Listening at ${port || 3000}`);

module.exports = app;
