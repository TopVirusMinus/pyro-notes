import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: {},
    isEmpty: true,
    maxZIndex: 1,
    colors: [
      { background: "#333", title: "#2eb086", content: "#eee6ce" },
      { background: "#8ab9aa", title: "#FDEDBE", content: "#333" },
      {
        background: "rgb(255, 122, 106)",
        title: "rgb(76, 39, 39)",
        content: "rgb(255, 255, 255)",
      },
    ],
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
      Object.keys(state.notes).length === 0
        ? (state.isEmpty = true)
        : (state.isEmpty = false);
    },
    incrementZIndex: (state, action) => {
      state.maxZIndex = Math.max(
        state.maxZIndex,
        state.notes[action.payload.id].zIndex + 1
      );
      state.notes[action.payload.id].zIndex = state.maxZIndex + 1;
    },
  },
});

export const { setTitle, setContent, createNote, deleteNote, incrementZIndex } =
  noteSlice.actions;
export default noteSlice.reducer;
