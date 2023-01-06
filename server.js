const express = require('express');
// We move our routes to another folder.file so it does not clog up our server.js file
const routes = require('./routes/index');
// const { clog } = require('./middleware/clog');

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(clog);

// Middleware for parsing  if user's iput is a json (the object) we're gonna parsing using this middleware
app.use(express.json());
// Middleware for parsing application/json and urlencoded data
// if the user creates the key value pair use this parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// We are telling the server to use "/" to use the api and html routes
app.use('/', routes);


app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);




