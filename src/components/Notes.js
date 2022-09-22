import Note from "./Note/Note";
import { useSelector, useDispatch } from "react-redux";
import { memo } from "react";
import { setTitle, setContent, setCurrentNote } from "../store/noteSlice";

const Notes = () => {
  const noteState = useSelector((state) => state.noteSlice);
  //console.log(noteState, "map");
  const dispatch = useDispatch();

  const noteComponents = Object.values(noteState.notes).map((n) => {
    let xAxis = n.x - 100;
    let yAxis = n.y - 80;
    let maxZIndex = 1;

    return (
      <Note
        onClick={() => {
          n.zIndex = maxZIndex + 1;
          maxZIndex += 1;
        }}
        style={{ zIndex: n.zIndex }}
        key={n.id}
        pos={{ top: `${yAxis}px`, left: `${xAxis}px` }}
        id={n.id}
        title={n.title}
        content={n.content}
        width={{ width: n.width }}
        zIndex={n.zIndex}
      />
    );
  });

  return <div className="Notes">{noteComponents}</div>;
};
export default memo(Notes);