const express = require('express');
const path = require('path');
const fs = require('fs');

// Helper method for generating uniqui ids
const uuid = require('../helpers/uuid');

const PORT = 3001;

const app = express();

const notes = require('./db/db.json');

// Middleware for parsing  if user's iput is a json (the object) we're gonna parsing using this middleware
app.use(express.json()); 

// Middleware for parsing application/json and urlencoded data
// if the user creates the key value pair use this parsing
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

// GET request for riviews
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});












app.get('*', (req, res ) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);




