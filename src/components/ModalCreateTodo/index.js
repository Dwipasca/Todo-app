import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

// redux reducer
import { addTodos } from "../../store/todoListSlice";

const CreateTodo = ({ isOpen, onClose }) => {
  const todos = useSelector((state) => state.todoList.list);

  const dispatch = useDispatch();
  const toast = useToast();

  const [todo, setTodo] = useState({});

  const isEmpty = todo.title === "" || todo.description === "";

  const handleTitleChange = (e) => {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };

  const handleDescChange = (e) => {
    setTodo({
      ...todo,
      description: e.target.value,
    });
  };

  const handleCreateTodo = () => {
    dispatch(
      addTodos({
        id: todos.length + 1,
        title: todo.title,
        description: todo.description,
        status: 0,
        createdAt: "2021-12-19 15:00",
      })
    );
    setTodo({
      title: "",
      description: "",
    });

    onClose();
    toast({
      position: "top-right",
      title: "Create Todo",
      description: "New todo successfully created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="title-todo">Title</FormLabel>
            <Input
              id="title-todo"
              type="text"
              value={todo.title}
              onChange={(e) => handleTitleChange(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="desc-todo">Description</FormLabel>
            <Textarea
              id="desc-todo"
              type="text"
              value={todo.description}
              onChange={(e) => handleDescChange(e)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} variant="ghost" onClick={onClose}>
            Close
          </Button>
          <Button
            colorScheme="blue"
            disabled={isEmpty ? true : false}
            onClick={handleCreateTodo}
          >
            Create Todo
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTodo;
