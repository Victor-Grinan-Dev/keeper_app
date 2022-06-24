import React from 'react'
import Card from './Card'
import conctacts from './contacts'


const cardHandler = (conctact) => {
    return <Card key={conctact.id} name={conctact.name} tel={conctact.tel} email={conctact.email} img={conctact.img}/>
}

function Browser() {



  return (
    <div>
       {conctacts.map(
        cardHandler
       )}
    </div>
  )
}

export default Browser