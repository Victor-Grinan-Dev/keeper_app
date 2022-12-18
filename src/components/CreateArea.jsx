import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";
import { useState } from "react";

function CreateArea() {
    const [writing, setWriting] = useState(false);
    const [note, setNote] = useState({
      title:"",
      content:""
    });

    const showAdd = (e) => {
        setWriting(e.target.value !== "" || e.target.value === " ")
        console.log(writing)
    }

    const handleChange = (e) => {
      const {name, value} = e.target;

      showAdd(e);

      setNote(prevNote => {
        return {
          ...prevNote,
          [name]:value
        }; 
      });
    }

    const submitNote = () => {
      //e.preventDefault()
      if(localStorage.getItem('notes')){
        const data = JSON.parse(localStorage.getItem('notes'));
        localStorage.setItem('notes', JSON.stringify([ ...data, note]));
      }else{
        localStorage.setItem('notes', JSON.stringify([ note ]));
      }
      window.location.reload()
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange}/>

        {writing &&
        <Zoom in={true}>
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={submitNote}/>
            </Fab>
        </Zoom>}

      </form>
    </div>
  );
}

export default CreateArea;