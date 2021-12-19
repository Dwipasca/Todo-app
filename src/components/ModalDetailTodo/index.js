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

const DetailTodo = ({ isOpen, onClose, todo }) => {
  const [editTodo, setEditTodo] = useState({
    title: "",
    description: "",
    status: todo.status,
  });

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
            <Input id="id-todo" type="text" value={todo.id} isDisabled />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="title-todo">Title</FormLabel>
            <Input
              id="title-todo"
              type="text"
              value={todo.title}
              onChange={(e) => handleTitleEdit(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="desc-todo">Description</FormLabel>
            <Textarea
              id="desc-todo"
              type="text"
              value={todo.description}
              onChange={(e) => handleDescEdit(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="status-todo">Status</FormLabel>
            <Input
              id="status-todo"
              type="number"
              value={todo.status}
              onChange={(e) => handleStatusEdit(e)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} colorScheme="orange">
            Edit
          </Button>
          <Button colorScheme="red" disabled={todo.status === 0 ? true : false}>
            Delete Todo
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailTodo;
