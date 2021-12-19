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
  Select,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

// redux reducer
import { deleteTodo, changeTodo } from "../../store/todoListSlice";

const DetailTodo = ({ isOpen, onClose, todo }) => {
  const dispatch = useDispatch();
  const toast = useToast();

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
      status: parseInt(e.target.value),
    });
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
    onClose();
    toast({
      position: "top-right",
      title: "Delete Todo",
      description: "Todo has been successfully delete.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleEditTodo = () => {
    dispatch(changeTodo(editTodo));
    onClose();
    toast({
      position: "top-right",
      title: "Edit Todo",
      description: "Edit todo successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detail Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column" gap={5}>
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
              <Select
                id="status-todo"
                value={editTodo.status}
                onChange={(e) => handleStatusEdit(e)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </Select>
            </FormControl>
          </Flex>
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
