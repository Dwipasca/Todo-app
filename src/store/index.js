import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoListReducer from "./todoListSlice";

export default configureStore({
  reducer: {
    todoList: todoListReducer,
    counter: counterReducer,
  },
});
