const app = require('express').Router();
const apiRoutes = require('./api-routes');
const htmlRoutes = require('./html-routes');

// const app = express();

// localhost:3001/api to use the api routes
app.use('/api', apiRoutes);
//localhost:3001/ to use the html routes
app.use('/', htmlRoutes);

module.exports = app;
