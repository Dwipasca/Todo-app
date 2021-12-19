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
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";

// redux reducer
import { deleteTodo, changeTodo } from "../../store/todoListSlice";

const DetailTodo = ({ isOpen, onClose, todo }) => {
  // const todoList = useSelector((state) => state.todoList.list);
  const dispatch = useDispatch();

  const [editTodo, setEditTodo] = useState(todo);

  const handleTitleEdit = (e) => {
    setEditTodo({
      ...editTodo,
      title: e.target.value,
    });
  };

  const handleDescEdit = (e) => {
    setEditTodo({
      ...editTodo,
      description: e.target.value,
    });
  };

  const handleStatusEdit = (e) => {
    setEditTodo({
      ...editTodo,
      status: e.target.value,
    });
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
    onClose();
  };

  const handleEditTodo = () => {
    dispatch(changeTodo(editTodo));
    onClose();
  };

  console.log(editTodo);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detail Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="id-todo">ID</FormLabel>
            <Input id="id-todo" type="text" value={editTodo.id} isDisabled />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="title-todo">Title</FormLabel>
            <Input
              id="title-todo"
              type="text"
              value={editTodo.title}
              onChange={(e) => handleTitleEdit(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="desc-todo">Description</FormLabel>
            <Textarea
              id="desc-todo"
              type="text"
              value={editTodo.description}
              onChange={(e) => handleDescEdit(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="status-todo">Status</FormLabel>
            <Input
              id="status-todo"
              type="number"
              value={editTodo.status}
              onChange={(e) => handleStatusEdit(e)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} colorScheme="orange" onClick={handleEditTodo}>
            Edit
          </Button>
          <Button
            colorScheme="red"
            disabled={todo.status === 0 ? true : false}
            onClick={handleDeleteTodo}
          >
            Delete Todo
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailTodo;
