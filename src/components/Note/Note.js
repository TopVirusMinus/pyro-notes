import React, { useState } from "react";
import Draggable from "react-draggable";
import TextareaAutosize from "react-autosize-textarea";
import deleteImg from "../../assets/close.png";
import CSS from "./Note.module.css";
import { setTitle, setContent } from "../../store/noteSlice";
import { useDispatch } from "react-redux";
const Note = ({ id, title, content }) => {
  const dispatch = useDispatch();

  const [disableDrag, setDisableDrag] = useState(true);

  const handleTitleChange = (e) => {
    console.log(id);
    dispatch(setTitle({ id, title: e.target.value }));
  };

  const handleContentChange = (e) => {
    dispatch(setContent({ id, content: e.target.value }));
  };

  return (
    <Draggable key={id} disabled={disableDrag} bounds="parent">
      <div
        className={`${CSS.note}`}
        onMouseOver={(e) => {
          const computed = window.getComputedStyle(e.target)["cursor"];
          setDisableDrag((prev) => computed === "text");
        }}
      >
        <img className={CSS.deleteImg} src={deleteImg} alt="delete" />
        <TextareaAutosize
          onChange={(e) => handleTitleChange(e)}
          spellCheck="false"
          placeholder="Enter a title"
          value={title}
          className={CSS.title}
        />
        <TextareaAutosize
          onChange={(e) => handleContentChange(e)}
          spellCheck="false"
          placeholder="what's on your mind?"
          value={content}
          className={`${CSS.content}`}
        />
      </div>
    </Draggable>
  );
};

export default Note;
