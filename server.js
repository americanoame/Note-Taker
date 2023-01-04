const express = require('express');


const { clog } = require('./middleware/clog');
// const api = require('./routes/index.js');


// Helper method for generating uniqui ids
const uuid = require('./helper/uuid');
const notes = require('./db/db.json');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('./helper/fsUtils');

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(clog);



// Middleware for parsing  if user's iput is a json (the object) we're gonna parsing using this middleware
app.use(express.json());

// Middleware for parsing application/json and urlencoded data
// if the user creates the key value pair use this parsing
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);


app.use(express.static('public'));




// DELETE Route for a specific tip
app.delete('/:id', (req, res) => {
    const tipId = req.params.id;
    readFromFile('./db/tips.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // Make a new array of all tips except the one with the ID provided in the URL
            const result = json.filter((notes) => notes.id !== id);

            // Save that array to the filesystem
            writeToFile('./db/tips.json', result);

            // Respond to the DELETE request
            res.json(`Item ${id} has been deleted 🗑️`);
        });
});


// POST Route for a new UX/UI tip
// app.post('/', (req, res) => {
//     console.log(req.body);

//     const { username, topic, tip } = req.body;

//     if (req.body) {
//         const note = {
//             username,
//             tip,
//             topic,
//             tip_id: uuidv4(),
//         };

//         readAndAppend(newTip, './db/tips.json');
//         res.json(`Tip added successfully 🚀`);
//     } else {
//         res.error('Error in adding tip');
//     }
// });

// module.exports = tips;









app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/pages/index.html'));
});

app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);




