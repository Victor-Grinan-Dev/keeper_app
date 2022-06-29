import React from 'react'

function Note({title, content}) {
  return (
    <div className='note'>

    <h4> {title} </h4>
    <p> {content} </p>

    </div>
  )
}

export default Note