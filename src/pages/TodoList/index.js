// lib
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// redux reducer
import { setTodos } from "../../store/todoListSlice";

// component
import Todo from "../../components/Todo";

// style
import style from "./todoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todoList.list);
  const dispatch = useDispatch();

  const url =
    "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";

  useEffect(() => {
    axios.get(url).then((res) => dispatch(setTodos(res.data)));
  }, [dispatch]);

  console.log(todos);
  return (
    <div className={style.wrapper}>
      <h1>Todo List</h1>

      <div>
        <input name="input-todo" placeholder="Add Todo" />
        <button name="btn-todo" onClick={() => alert("tada")}>
          Add
        </button>
      </div>

      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
