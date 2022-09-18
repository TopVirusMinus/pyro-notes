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
      <h1
        onSelectStart="return false"
        className={CSS.tutHeader}
        style={{
          color: "#eeeeee22",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          fontSize: "4em",
          pointerEvents: "none",
          backgroundColor: "transparent",
        }}
      >
        Double Click To Add A New Note
      </h1>
      <Notes />
    </div>
  );
};

export default Canvas;
