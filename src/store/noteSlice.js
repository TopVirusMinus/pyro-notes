import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialId = uuidv4();
const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: {},
    isEmpty:true
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
      state.isEmpty = false;
    },
    deleteNote: (state, action) => {
      delete state.notes[action.payload.id];
      Object.keys(state.notes).length === 0 ? state.isEmpty = true : state.isEmpty = false;
    },
  },
});

export const { setTitle, setContent, createNote, deleteNote } =
  noteSlice.actions;
export default noteSlice.reducer;
