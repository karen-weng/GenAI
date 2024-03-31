import React from 'react'
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

function Video() {
    
  return (
        <div>
            Video
            <video id='videoid'/>
        </div>
        
    )
}

export default Video