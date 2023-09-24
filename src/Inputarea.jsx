import React, { useState } from 'react'
import "./CSS/inputarea.css"



function Inputarea(props) {


  const [word,setWord] = useState({title:"",descrip:""})
  
  const onTitleChng=(e)=>{
    let newval = e.target.value
    setWord(prev=>{
      return {...prev,title:newval}
    })
  }
  const onDescripChng=(e)=>{
    let newval = e.target.value
    setWord(prev=>{
      return {...prev,descrip:newval}
    })
  }

  const passWord=(e)=>{
    props.add(word,e)
    setWord({title:"",descrip:""})
  }


  return (
    <div className="parentInput">
        <form className="input_area" action="">
          <div className="title">
            <label className="title_lab"><p>Title</p></label>
            <input type="text" value={word.title} onChange={onTitleChng}></input>
          </div>
          <div className="description">
            <label className="descrip_lab"><p>Description</p></label>
            <textarea name="decription" id="descrip" rows="4" value={word.descrip} onChange={onDescripChng}></textarea>
          </div>
          <div className="btn">
            <button onClick={passWord}>ADD</button>
          </div>
        </form>
    </div>
  )
}

export default Inputarea



