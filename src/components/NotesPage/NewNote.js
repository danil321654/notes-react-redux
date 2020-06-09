import React, {useState} from "react";
import {store} from "../../store.js";
import {addNote} from "../../actions/addNote.js";
import "../../css/notes.css";

function NewNote(props) {
  const add = e => {
    e.preventDefault();
    let noteText = e.target.previousSibling.value;
    if (noteText) store.dispatch(addNote(noteText));
  };
  return (
    <div>
      <form action="" className="newNote">
        <textarea className="newNoteText" />
        <input
          type="submit"
          className="notes-button"
          onClick={add}
          value="ADD"
        />
      </form>
    </div>
  );
}
export {NewNote};
