import './App.css';
import React, { useState } from 'react'
import Form from './Form.js'

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
          <Form state={state} useState={useState} />
        </div>
        
    </div>

  )
}


export default App;
