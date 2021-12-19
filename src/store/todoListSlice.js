import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //initialState todos
    setTodos: (state, action) => {
      state.list = action.payload;
      return state;
    },
    //Adding todos
    addTodos: (state, action) => {
      state.list.push(action.payload);
      return state;
    },
  },
});

export const { setTodos, addTodos } = todoListSlice.actions;

export default todoListSlice.reducer;
