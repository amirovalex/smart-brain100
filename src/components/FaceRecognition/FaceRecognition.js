import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  console.log(box);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          loading="lazy"
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow ? box.topRow : 0,
            right: box.rightCol ? box.rightCol : 0,
            bottom: box.bottomRow ? box.bottomRow : 0,
            left: box.leftCol ? box.leftCol : 0,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
