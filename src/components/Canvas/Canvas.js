import Notes from "../Notes";
import CSS from "./Canvas.module.css";
import Note from "../Note/Note";
import { createNote } from "../../store/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Canvas = () => {
  const noteState = useSelector((state)=>state.noteSlice);
  console.log(noteState);

  const dispatch = useDispatch();
  function createNewNote(e) {
    dispatch(
      createNote({
        id: uuidv4(),
        title: "",
        content: "",
        x: e.screenX,
        y: e.screenY,
      })
    );
  }

  return (
    <div className="canvas" onDoubleClick={(e) => createNewNote(e)}>
      {noteState.isEmpty && (<h1
        onSelectStart="return false"
        className={CSS.tutHeader}
      >
        Double Click To Add A New Note
      </h1>)}
      <Notes />
    </div>
  );
};

export default Canvas;
