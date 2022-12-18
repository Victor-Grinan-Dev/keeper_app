import React, { useEffect, useState } from 'react'
//import Card from './Card'
//import conctacts from './contacts'
import notes from './notes'
import Note from './Note'

function Browser() {
  const [localNotes, setLocalNotes] = useState();

useEffect(() => {
  const data = JSON.parse(localStorage.getItem("notes"));
  setLocalNotes(data);
}, []);

const hideItem = () => {
   
};

const delItem = (e) => {
   const data = JSON.parse(localStorage.getItem('notes'));
   const newData = data.filter((d) => {
    return d.title !== e.target.parentElement.parentElement.name;
   });
   localStorage.setItem('notes', JSON.stringify(newData));
   setLocalNotes(newData);
};

  return (
    <div className='browser'>
        {notes.map(note =>  <Note key={note.id} title={note.title} content={note.content} id={note.id} onDel={hideItem}/> )}
        {localNotes && localNotes.map((note,i) => <Note key={i} id={i} name={note.title} title={note.title} content={note.content} onDel={(e) => delItem(e)}/>)}
    </div>
  )
}

export default Browser