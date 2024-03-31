import './App.css';
import React, { useState } from 'react'
import Form from './Form.js'
import * as handTrack from 'handtrackjs';

const defaultParams = {
  flipHorizontal: false,
  outputStride: 16,
  imageScaleFactor: 1,
  maxNumBoxes: 20,
  iouThreshold: 0.2,
  scoreThreshold: 0.6,
  modelType: "ssd320fpnlite",
  modelSize: "large",
  bboxLineWidth: "2",
  fontSize: 17,
};

const model = await handTrack.load(defaultParams)

const img = document.getElementById('img'); 
// const model =  await handTrack.load();
// const predictions = await model.detect(img);

const video = document. getElementById('videoid');

handTrack.startVideo(video); 
/* start camera input stream on the provided video tag. returns a promise with message format
{ status: false, msg: 'please provide a valid video element' } 
*/

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
        {/* <video id='videoid' width="800" height="200" /> */}
        <br />
        <br />

        <div class="userInput">
          <br />
          <br />
          <Form state={state} setState={setState} useState={useState} />
        </div>
        
        
    </div>

  )
}

export default App;