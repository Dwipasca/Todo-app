import React from "react";

// style
import style from "./todo.module.css";

const Todo = ({ todo }) => {
  return (
    <div className={style.wrapper}>
      <p>{todo.title}</p>
    </div>
  );
};

export default Todo;
