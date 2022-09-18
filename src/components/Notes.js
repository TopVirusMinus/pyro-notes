import Note from "./Note/Note";
import { useSelector, useDispatch } from "react-redux";
import { memo } from "react";
import { setTitle, setContent, setCurrentNote } from "../store/noteSlice";

const Notes = () => {
  const noteState = useSelector((state) => state.noteSlice);
  //console.log(noteState, "map");
  const dispatch = useDispatch();

  const noteComponents = Object.values(noteState.notes).map((n) => {
    return (
      <Note
        key={n.id}
        style={{ top: `${n.x}px`, left: `${n.y}px` }}
        id={n.id}
        title={n.title}
        content={n.content}
      />
    );
  });

  return <div className="Notes">{noteComponents}</div>;
};
export default memo(Notes);
