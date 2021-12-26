import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import axios from "axios";

// redux reducer
import { setTodos } from "../../store/todoListSlice";

// component
import Todo from "../../components/Todo";
import ModalCreateTodo from "../../components/ModalCreateTodo";

const TodoList = () => {
  const todos = useSelector((state) => state.todoList.list);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const url =
    "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";

  useEffect(() => {
    axios.get(url).then((res) => dispatch(setTodos(res.data)));
  }, [dispatch]);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      w="100vw"
      h="100vh"
      gap={10}
    >
      <Box>
        <Heading as="h1" size="lg" isTruncated>
          Todo List
        </Heading>
      </Box>

      <Box>
        <Button name="btn-todo" onClick={onOpen}>
          Add Todo
        </Button>
      </Box>

      <Flex flexDir="row" gap={20} justifyContent="center">
        <Flex
          border="2px solid black"
          width="30%"
          wrap="wrap"
          justifyContent="center"
          padding="10px"
        >
          <Heading as="h2" size="md" mb={5}>
            Uncomplete Task
          </Heading>
          {todos.map((todo) =>
            todo.status === 0 ? <Todo key={todo.id} todo={todo} /> : null
          )}
        </Flex>
        <Flex
          border="2px solid black"
          width="30%"
          wrap="wrap"
          justifyContent="center"
          padding="10px"
        >
          <Heading as="h2" size="md" mb={5}>
            Complete Task
          </Heading>
          {todos.map((todo) =>
            todo.status === 1 ? <Todo key={todo.id} todo={todo} /> : null
          )}
        </Flex>
      </Flex>

      {isOpen && <ModalCreateTodo isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default TodoList;
