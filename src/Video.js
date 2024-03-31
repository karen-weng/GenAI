import React, { useEffect } from "react";
import * as handTrack from "handtrackjs";

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

const model = await handTrack.load(defaultParams);

const img = document.getElementById("img");
// const model =  await handTrack.load();
// const predictions = await model.detect(img);

/* start camera input stream on the provided video tag. returns a promise with message format
{ status: false, msg: 'please provide a valid video element' } 
*/

function Video() {
  useEffect(() => {
    const video = document.getElementById("videoid");
    handTrack.startVideo(video);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        minWidth: "100%",
        width: "auto",
        height: "auto", 
        position: "absolute",
        zIndex: "-100",
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h1>Guiding Time~</h1>
      
        <video
          id="videoid"
          style={{
            display: 'block',
            width: "100%",
            height: "40rem",
            minHeight: "400px",
            textAlign: "center",
            transform: "rotateY(180deg)",
            WebkitTransform: "rotateY(180deg)",
            MozTransform: "rotateY(180deg)",
          }}
        />

    </div>
  );
}

export default Video;
