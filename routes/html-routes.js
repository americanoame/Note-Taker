const app = require('express').Router();
const path = require('path');

// GET request for riviews
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
//localhost:3001/notes, GET method

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
// "*" means any route that isnt defined in your routes files
//localhost:3001/atedasdas

module.exports = app;