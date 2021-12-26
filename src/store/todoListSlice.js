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

    addTodos: (state, action) => {
      state.list.push(action.payload);
      return state;
    },

    deleteTodo: (state, action) => {
      const todoDelete = action.payload;
      let todos = state.list;
      todos.splice(
        todos.findIndex((todo) => todo.id === todoDelete),
        1
      );
    },

    changeTodo: (state, action) => {
      const id = action.payload.id;
      // const { id, title, description, status } = action.payload;
      let todos = state.list;
      const idx = todos.findIndex((obj) => obj.id === id);

      let keys = Object.keys(action.payload);
      let values = Object.values(action.payload);

      for (let i = 0; i <= keys.length - 1; i++) {
        todos[idx][keys[i]] = values[i];
      }
    },
  },
});

export const { setTodos, addTodos, deleteTodo, changeTodo } =
  todoListSlice.actions;

export default todoListSlice.reducer;
