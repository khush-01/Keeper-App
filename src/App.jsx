import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note, index) => index !== id));
  };

  return (
    <div>
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
