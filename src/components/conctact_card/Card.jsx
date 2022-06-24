import React from 'react';
import Avatar from './Avatar';
import defaultImg from '../../assets/meLogo-white-border.png'

function Card(props) {
  return (
    <div className="note">
      <div className="top">
        <p></p>       
        <h2 className="name">{props.name ? props.name : "someone"}</h2>
        <Avatar img={props.img ? props.img : defaultImg} />
      </div>      
      <div className="bottom">
        <p className="info">{props.email?props.email: "seomeone@gmail.com"}</p>
        <p className="info">tel: {props.tel?props.tel:2345432}</p>
      </div>
    </div>
  )
}

export default Card