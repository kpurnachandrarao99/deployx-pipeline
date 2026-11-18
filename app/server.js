
const express = require("express");

const app = express();

app.use(express.json());

// In-memory notes storage
let notes = [];

// Health API
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// Get all notes
app.get("/notes", (req, res) => {
    res.json(notes);
});

// Create a new note
app.post("/notes", (req, res) => {
    const note = {
        id: notes.length + 1,
        content: req.body.content
    };

    notes.push(note);

    res.status(201).json(note);
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
