import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { default as def } from "../notes";

function App() {
    const [notes, setNotes] = useState(def);

    function addNote(note) {
        setNotes(prev => [...prev, note]);
    }
    function deleteNote(id) {
        setNotes(notes.filter((note, i) => i !== id));
    }
    return (<div><Header />
    <CreateArea addNote={addNote} />
        {notes.map((note, i) => {
            return (<Note
                key={i}
                id={i}
                title={note.title}
                content={note.content}
                deleteNote={deleteNote} />);
        })}
    <Footer /></div>);
}

export default App;