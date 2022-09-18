import { useState, useRef, useCallback, useMemo } from "react";
import "./App.css";
import { Note } from "./components/Note/Note";
import Canvas from "./components/Canvas/Canvas";
import addImg from "./assets/plus.png";

function App() {
  function handleClick(x, y) {
    console.log(x, y);
  }

  return (
    <>
      <div className="App">
        <Canvas />
      </div>
    </>
  );
}

export default App;
