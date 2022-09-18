import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialId = uuidv4();
const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: {
      [initialId]: { id: initialId, title: "", content: "", x: 20, y: 20 },
    },
  },
  reducers: {
    setTitle: (state, action) => {
      state.notes[action.payload.id].title = action.payload.title;
    },
    setContent: (state, action) => {
      state.notes[action.payload.id].content = action.payload.content;
    },
    createNote: (state, action) => {
      state.notes[action.payload.id] = action.payload;
    },
    deleteNote: (state, action) => {},
  },
});

export const { setTitle, setContent, createNote, deleteNote } =
  noteSlice.actions;
export default noteSlice.reducer;
