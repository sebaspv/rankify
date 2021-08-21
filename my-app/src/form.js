import React from 'react'
import './App.css'

function handleSubmit(e) {
  e.preventDefault();
  console.log()

  localStorage.setItem('img', document.getElementById('upload').value);
  console.log(document.getElementById('upload').value);
  document.getElementById('upload').value=" ";
}
function Form(){
    return(
    <div class="container">
      <div class="button-wrap">
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Put the link to your image here!" id="upload"/>
        </form>
      </div>
    </div>
    )
}

export default Form