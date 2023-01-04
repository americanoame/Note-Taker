const path = require('path');

// GET request for riviews
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
    readFromFile('./db/db.json').then((notes) => res.json(JSON.parse(notes)));
});


app.get('/api/notes/:id', (req, res) => {
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

//line 29-43 is delete note
//line 46-64 is to create note