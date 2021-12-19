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
    deleteTodo: (state, action) => {
      const todoDelete = action.payload;
      let todos = state.list;
      todos.splice(
        todos.findIndex((todo) => todo.id === todoDelete),
        1
      );
    },
    changeTodo: (state, action) => {
      const { id, title, description, status } = action.payload;
      let todos = state.list;
      const idx = todos.findIndex((obj) => obj.id === id);
      todos[idx].title = title;
      todos[idx].description = description;
      todos[idx].status = status;
      console.log(todos);
    },
  },
});

export const { setTodos, addTodos, deleteTodo, changeTodo } =
  todoListSlice.actions;

export default todoListSlice.reducer;
