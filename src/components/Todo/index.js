import React from "react";

// style
// import style from "./todo.module.css";

const Todo = ({ todo }) => {
  return (
    <div>
      <p>{todo.title}</p>
    </div>
  );
};

export default Todo;
