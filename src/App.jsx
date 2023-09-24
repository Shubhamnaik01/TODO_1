
import './CSS/App.css';
import Nav from "./Nav"
import Inputarea from './Inputarea'
import Cardnote from './Cardnote';
import { useState } from 'react';


function App() {


  const[data,setData] = useState([])


  function addData(d,e){
    setData(prev=>{
      return [...prev,d]
    })

    e.preventDefault()
    
  }


  function delData(i){
    // console.log(m)
    setData(data.filter((m,id)=>{
      return i!=id
    }))
  }
  

  return (
    <div className="App">
      <Nav></Nav>
      <Inputarea add={addData} />
      <div className='cardarea'>
      {data.map((m,i)=>{
        return <Cardnote key = {i} id={i} title={m.title} description={m.descrip} del={delData}/>
      })}
      </div>
    </div>
  );
}

export default App;
