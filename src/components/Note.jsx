import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note({title, content}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;