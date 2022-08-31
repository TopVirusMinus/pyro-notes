import React, { useState } from 'react';
import "./Note.css";
import Draggable from "react-draggable";
import TextareaAutosize from 'react-autosize-textarea';
import deleteImg from "../../assets/close.png";


export const Note = (props) => {
    const [disableDrag, setDisableDrag] = useState(true);
    const [hide, setHide] = useState(false);

    function checkSender(tag){ 
        tag === "DIV" ? setDisableDrag(false): setDisableDrag(true);
    }

    if(hide){
        return;
    }

    return (  
        <Draggable disabled={disableDrag} bounds="parent">
            <div className="note" onClick={(e)=>checkSender(e.target.tagName)}>
                <img className='deleteImg' src={deleteImg} alt="delete" onClick={()=>setHide(true)}/>
                <TextareaAutosize spellCheck="false" placeholder='Enter a title' {...props.title}  className="title" onClick={(e)=>checkSender(e.target.tagName)}/>
                <TextareaAutosize spellCheck="false" draggable={false} placeholder="what's on your mind?" {...props.content} className="content" onClick={(e)=>checkSender(e.target.tagName)}/>
            </div>  
        </Draggable>)
}
