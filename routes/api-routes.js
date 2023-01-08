const app = require('express').Router();
const uuid = require('../helper/uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helper/fsUtils');

app.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((notes) => res.json(JSON.parse(notes)));
});
//localhost:3001/api/notes, GET method


app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((notes) => notes.id === id);
            return result.length > 0
                ? res.json(result)
                : res.json('No tip with that ID');
        });
});
//localhost:3001/api/notes/:id, GET method
// :id means a parameter so we can pass different IDs

// DELETE Route for a specific tip
app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // Make a new array of all tips except the one with the ID provided in the URL
            const result = json.filter((notes) => notes.id !== id);

            // Save that array to the filesystem
            writeToFile('./db/db.json', result);

            // Respond to the DELETE request
            res.json(`Item ${id} has been deleted 🗑️`);
        });
});
// localhost:3001/api/notes/:id, DELETE method
//:id means you are passing a id when you run this route

// POST Route for a new UX/UI tip
app.post('/notes', (req, res) => {
    console.log(req.body);

    // Destructuring assgnment for the item in req.body
    const { title, text } = req.body;

    if (req.body) {
        const note = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(note, './db/db.json');
        res.status(200).json(`Tip added successfully 🚀`);
    } else {
        res.json('Error in adding tip');
    }
});
//locahost:3001/api/notes, POST method

module.exports = app;