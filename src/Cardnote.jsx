import React from 'react'
import "./CSS/cardnote.css"

function Cardnote(props) {

    const removeWord=(ele)=>{
        props.del(props.id,props.title)
      } 


  return (
    <div className="parentcard">
        <h1>{props.title} </h1>
        <p>{props.description}</p>
        <button class="note_btn"onClick={removeWord}>DEL</button>
    </div>
  )
}

export default Cardnote