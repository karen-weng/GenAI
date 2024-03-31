import './App.css';
import React, { useState } from 'react'

function App() {
  const [state, setState] = useState('')

  return (
    <div>

        <div class="intro">
          <br />
          <h1>GuildAI</h1>
          <p>GuideAI is a program designed to guide the user step-by-step
            through a tutorial prompted by the user.</p>
          <p>To get started, enter an activity you want GuideAI to guide you through.</p>
          <br />
        </div>

        <br />
        <br />

        <div class="userInput">
          <br />
          <br />
          <form>
            <label htmlFor={'my-input'}>Enter prompt: </label>
            <br />
            <br />
            <textarea rows="4" cols="50"
              id={'my-input'}
              type={'text'}
              class="input-box"
              value={state}
              placeholder={'How to...'}
              onChange={event => {
                setState(event.target.value)
              }}
            />
            <br />
            <br />
            <button onclick="myFunction()"> Submit </button>
            <br />
            <br />
            {/* You entered: {state} */}
          </form>
        </div>
        
    </div>

  )
}


export default App;
