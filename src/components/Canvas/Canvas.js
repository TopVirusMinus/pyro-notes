import Notes from "../Notes";
import CSS from "./Canvas.module.css";
import Note from "../Note/Note";
import { createNote } from "../../store/noteSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Canvas = () => {
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
      <Notes />
    </div>
  );
};

export default Canvas;
