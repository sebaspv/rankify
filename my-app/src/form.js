import React from 'react'
import './App.css'

function Form(){
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value)
  }
    return(
    <div class="container">
      <div class="button-wrap">
        <form>
        <input type="text" placeholder="Put the link to your image here!" id="upload" onSubmit={handleSubmit}/>
        <input type="submit" value="Upload File" class="button"/>
        </form>
      </div>
    </div>
    )
}

export default Form