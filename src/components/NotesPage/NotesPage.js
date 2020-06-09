import React, {useState} from "react";
import {store} from "../../store.js";
import {Note} from "./Note.js";
import {NewNote} from "./NewNote.js";
import "../../css/notes.css";

function NotesPage(props) {
  console.log("notes", props);
  let notesList = props
    .filter(el => el.noteStatus != "DELETED")
    .map(el => Note(el));
  return (
    <div className="page-wrapper">
      <NewNote />

      <div className="notes">{notesList}</div>
    </div>
  );
}
export {NotesPage};
