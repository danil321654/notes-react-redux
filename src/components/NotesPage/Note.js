import React, {useState} from "react";
import {store} from "../../store.js";
import {deleteNote} from "../../actions/deleteNote.js";
import {likeNote} from "../../actions/likeNote.js";
import "../../css/notes.css";
import "../../css/bootstrap.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {faTrash, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";

fontawesome.library.add(faTrash, faHeart, farHeart);

function Note(props) {
  const like = () => store.dispatch(likeNote(props.noteId));
  const del = () => store.dispatch(deleteNote(props.noteId));
  console.log("noteprops", props);
  return (
    <div className="note" id={"note" + props.noteId}>
      <div className="post-header">
        <button className="noteButton" onClick={del}>
          <FontAwesomeIcon icon="trash" />{" "}
        </button>
      </div>
      <div className="noteText">{props.text}</div>

        <div className="post-footer">
          <button className="noteButton" onClick={like}>
            <FontAwesomeIcon icon={props.liked ? faHeart : farHeart}/>{" "}
          </button>
        </div>
    </div>
  );
}
export {Note};
