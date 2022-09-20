import React, { useState } from "react";
import Draggable from "react-draggable";
import TextareaAutosize from "react-autosize-textarea";
import deleteImg from "../../assets/close.png";
import CSS from "./Note.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  setTitle,
  setContent,
  deleteNote,
  incrementZIndex,
} from "../../store/noteSlice";
const Note = ({ id, title, content, pos, width }) => {
  const dispatch = useDispatch();

  const [disableDrag, setDisableDrag] = useState(true);
  const noteState = useSelector((state) => state.noteSlice);

  const handleTitleChange = (e) => {
    console.log(id);
    dispatch(setTitle({ id, title: e.target.value }));
  };

  const handleContentChange = (e) => {
    dispatch(setContent({ id, content: e.target.value }));
  };

  const handleDelete = (e) => {
    dispatch(deleteNote({ id }));
  };

  const handleZIndex = () => {
    dispatch(incrementZIndex({ id }));
  };

  return (
    <Draggable key={id} disabled={disableDrag} bounds="parent">
      <div
        onClick={() => handleZIndex()}
        className={`${CSS.note}`}
        style={{
          top: pos.top,
          left: pos.left,
          width: width.width,
          zIndex: noteState.notes[id].zIndex,
        }}
        onMouseOver={(e) => {
          const cursorStyle = window.getComputedStyle(e.target)["cursor"];
          setDisableDrag(
            (prev) => cursorStyle === "text" || cursorStyle === "pointer"
          );
        }}
      >
        <img
          className={CSS.deleteImg}
          onClick={(e) => handleDelete(e)}
          src={deleteImg}
          alt="delete"
        />
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
