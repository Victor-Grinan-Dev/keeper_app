import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";
import { useState } from "react";



function CreateArea({addBtn}) {
    const [writing, setWriting] = useState(false)

    const showAdd = (e) => {
        setWriting(!e.target.value == "" || e.target.value === " ")
        console.log(writing)
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={showAdd}/>

        {writing &&
        <Zoom in={true}>
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={addBtn}/>
            </Fab>
        </Zoom>}

      </form>
    </div>
  );
}

export default CreateArea;