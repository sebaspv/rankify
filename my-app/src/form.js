import React from 'react'
import './App.css'

function Form(){
  function handleSubmit(e) {
    e.preventDefault();
  }
    return(
    <div class="container">
      <div class="button-wrap">
        <form>
        <input type="text" placeholder="Put the link to your image here!" id="upload"/>
        <input type="submit" value="Upload File" class="button" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
    )
}

export default Form