  export const notesReducer = (state = {notes: []}, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return Object.assign({}, state, {
        notes: [
          ...state.notes,
          {
            noteId: state.notes.length,
            text: action.text,
            noteStatus: "UNCHECKED",
            liked: false
          }
        ]
      });
      break;
    case "LIKE_NOTE":
      return Object.assign({}, state, {
        notes: state.notes.map(el =>
          el.noteId == action.noteId
            ? Object.assign(el, {liked: true})
            : el
        )
      });
      break;
    case "DEL_NOTE":
      return Object.assign({}, state, {
        notes: state.notes.map(el =>
          el.noteId == action.noteId
            ? Object.assign(el, {noteStatus: "DELETED"})
            : el
        )
      });
      break;
    default:
      return state;
  }
};
