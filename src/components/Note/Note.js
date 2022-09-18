import React, { useState } from "react";
import Draggable from "react-draggable";
import TextareaAutosize from "react-autosize-textarea";
import deleteImg from "../../assets/close.png";
import CSS from "./Note.module.css";

export const Note = (props) => {
  const [disableDrag, setDisableDrag] = useState(true);

  return (
    <Draggable disabled={disableDrag} bounds="parent">
      <div
        className={CSS.note}
        onMouseOver={(e) => {
          const computed = window.getComputedStyle(e.target)["cursor"];
          setDisableDrag((prev) => computed === "text");
        }}
      >
        <img className={CSS.deleteImg} src={deleteImg} alt="delete" />
        <TextareaAutosize
          spellCheck="false"
          placeholder="Enter a title"
          {...props.title}
          className={CSS.title}
        />
        <TextareaAutosize
          spellCheck="false"
          placeholder="what's on your mind?"
          {...props.content}
          className={CSS.content}
        />
      </div>
    </Draggable>
  );
};
