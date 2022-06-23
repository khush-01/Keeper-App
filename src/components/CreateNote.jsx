import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";

function CreateNote(props) {
  const [isFocussed, setIsFocussed] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const formUpdate = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  return (
    <form className="create-note">
      {isFocussed && (
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={formUpdate}
        />
      )}
      <textarea
        name="content"
        rows={isFocussed ? 3 : 1}
        placeholder="Take a note..."
        value={note.content}
        onChange={formUpdate}
        onFocus={() => setIsFocussed(true)}
      ></textarea>
      <Zoom in={isFocussed}>
        <Fab
          sx={{
            "&:hover": {
              background: "#eed151",
            },
          }}
          onClick={(e) => {
            props.addNote(note);
            setNote({ title: "", content: "" });
            setIsFocussed(false);
            e.preventDefault();
          }}
        >
          <Add />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateNote;
