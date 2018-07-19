console.log('Starting notes.js...');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var dublicateNotes = notes.filter((note) => note.title === title);

    if (dublicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
}

var getAll = () => {
    console.log("Getting all notes...");
}

var getNote = (title) => {
    var notes = fetchNotes();
    var foundNote = notes.filter((note) => note.title === title);
    return foundNote[0];
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}