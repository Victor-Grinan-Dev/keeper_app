import React from 'react'
//import defaultImage from '../../assets/meLogo-white-border.png'

function Avatar({img, name}) {
  return (
    <div className="avatar" >
        <img src={img} alt={name} />
    </div>
  )
}

export default Avatar;

//<img src={props.img ? props.img : defaultImage} alt="avatar" />