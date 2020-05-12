import React from "react";
import AddNoteForm from "../../components/add-note-form/add-note-form.component";
import NotesList from "../../components/notes-list/notes-list.component";

import "./add-notes.style.scss";

const AddNote = () => {
  return (
    <div>
      <AddNoteForm></AddNoteForm>
      <NotesList></NotesList>
    </div>
  );
};

export default AddNote;
