import React from 'react'
import "./CSS/inputarea.css"

function Inputarea() {
  return (
    <div class="parentInput">
        <form class="input_area" action="">
          <div class="title">
            <label class="title_lab"><p>Title</p></label>
            <input type="text"></input>
          </div>
          <div class="description">
            <label class="descrip_lab"><p>Description</p></label>
            <textarea name="decription" id="descrip" rows="4"></textarea>
          </div>
          <div class="btn">
            <button>ADD</button>
            <button>DEL</button>
          </div>
        </form>
    </div>
  )
}

export default Inputarea