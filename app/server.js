
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let notes = [];

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.post('/notes', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({
            error: 'Note text is required'
        });
    }

    const note = {
        id: notes.length + 1,
        text: text
    };

    notes.push(note);

    res.status(201).json(note);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Notes API running on port ${PORT}`);
});
