import React from 'react'
import './App.css'

function handleSubmit(e) {
  e.preventDefault();
  localStorage.setItem('img', document.getElementById('upload').value);
  document.getElementById('upload').value=" ";
  document.getElementById("confirmation").style.color='#15735A';
  document.getElementById("confirmation").innerText="Image received! Our machine learning models are analyzing your logo, prepare to see some insights in seconds!"

}
function Form(){
    return(

    <div class="container">
      <div class="button-wrap">
        <form onSubmit={handleSubmit}>
        <input type="text" class="button" placeholder="Paste your Image Url!" id="upload"/>
        </form>
      </div>
    </div>
    )
}

export default Form