import { useState } from "react";
import "./App.css";
import { Note } from "./components/Note/Note";
import addImg from "./assets/plus.png";

function App() {
  function handleClick(x, y) {
    console.log(x, y);
  }
  let notes = [];
  function createNewNote() {
    notes.push(<Note />);
  }

  return (
    <div className="App" onClick={(e) => handleClick(e.pageX, e.pageY)}>
      <div className="add-new-note">
        <img src={addImg} alt="add note" className="add-img" />
        <p>New Note</p>
      </div>
      <div className="Notes">
        <Note />
      </div>
    </div>
  );
}

export default App;
