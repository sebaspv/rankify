import React from 'react'
import './App.css'

function Form(){
    return(
    <div class="container">
      <div class="button-wrap">
        <label class="button" for="upload">Upload File</label>
        <input id="upload" type="file"/>
      </div>
    </div>
    )
}

export default Form