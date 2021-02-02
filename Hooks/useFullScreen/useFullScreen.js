import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useFullScreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const { element, triggerFull, exitFull } = useFullScreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="http://monthly.chosun.com/up_fd/Mdaily/2017-09/bimg_thumb/2017042000056_0.jpg"
          style={{ width: `100px`, height: `100px` }}
        />
        <button onClick={exitFull}>exit</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
}
