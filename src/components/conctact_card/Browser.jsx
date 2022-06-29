import React from 'react'
import Card from './Card'
import conctacts from './contacts'
import notes from '../notes'
import Note from '../Note'




function Browser() {

  return (
    <div>
       {/*conctacts.map(conctact =>  <Card key={conctact.id} name={conctact.name} tel={conctact.tel} email={conctact.email} img={conctact.image}/> )*/}
        {notes.map(note =>  <Note key={note.id} title={note.title} content={note.content} /> )}
    </div>
  )
}

export default Browser