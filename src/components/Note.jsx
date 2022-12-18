import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note({title, content, id, name, onDel}) {
  return (
    <div className="note" >
      <h1>"{title}"</h1>
      <p>{content}</p>
      <button onClick={onDel} id={id} name={name}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;