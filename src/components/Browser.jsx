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

  return (
    <div className='browser'>
       {/*conctacts.map(conctact =>  <Card key={conctact.id} name={conctact.name} tel={conctact.tel} email={conctact.email} img={conctact.image}/> )*/}
        {notes.map(note =>  <Note key={note.id} title={note.title} content={note.content} /> )}
        {localNotes && localNotes.map((note,i) => <Note key={i} title={note.title} content={note.content} />)}
    </div>
  )
}

export default Browser