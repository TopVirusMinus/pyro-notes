import React, { useState } from "react";
import Draggable from "react-draggable";
import TextareaAutosize from "react-autosize-textarea";
import deleteImg from "../../assets/close.png";
import CSS from "./Note.module.css";
import { setTitle, setContent, deleteNote } from "../../store/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import useLongPress from "../../hooks/useLongPress";
import { incrementZIndex } from "../../store/noteSlice";
import ColorSelector from "../ColorSelector/ColorSelector";

const Note = ({ id, title, content, pos, width }) => {
  const noteState = useSelector((state) => state.noteSlice);
  const dispatch = useDispatch();
  const [disableDrag, setDisableDrag] = useState(true);
  const [currentColor, setCurrentColor] = useState(noteState.colors[0]);

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

  const onLongPress = () => {
    //console.log("longpress is triggered");
    handleZIndex();
  };

  const onClick = () => {
    //console.log("click is triggered");
    handleZIndex();
  };

  const changeTheme = (id) => {
    setCurrentColor((prev) => noteState.colors[id]);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 0,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
  // /console.log(currentColor);
  return (
    <Draggable
      key={id}
      {...longPressEvent}
      disabled={disableDrag}
      bounds="parent"
    >
      <div
        className={`${CSS.note}`}
        style={{
          top: pos.top,
          left: pos.left,
          width: width.width,
          zIndex: noteState.notes[id].zIndex,
          backgroundColor: currentColor.background,
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
          style={{ color: currentColor.title }}
        />
        <TextareaAutosize
          onChange={(e) => handleContentChange(e)}
          spellCheck="false"
          placeholder="what's on your mind?"
          value={content}
          className={`${CSS.content}`}
          style={{ color: currentColor.content }}
        />
        <div className={CSS.colors}>
          {noteState.colors.map((c, idx) => {
            return (
              <ColorSelector
                id={idx}
                backgroundColor={c.background}
                handleClick={changeTheme}
              />
            );
          })}
        </div>
      </div>
    </Draggable>
  );
};

export default Note;
