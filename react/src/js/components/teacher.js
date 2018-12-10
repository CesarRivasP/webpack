import React, { Component } from 'react'

function Teacher(props) { //componente con el contenido de un componente sencillo, sin ciclo de vida
  return (
    <li className="Teacher">
      {props.name}
      <a href={`https://twitter.com/${props.twitter}`}>{props.twitter}</a>
    </li>
  )
}

export default Teacher
