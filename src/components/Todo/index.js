import React from "react";
import { useDisclosure, Button } from "@chakra-ui/react";

// component
import ModalDetailTodo from "../ModalDetailTodo";

const Todo = ({ todo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} isFullWidth mb="10px">
        {todo.title}
      </Button>

      {isOpen && (
        <ModalDetailTodo isOpen={isOpen} onClose={onClose} todo={todo} />
      )}
    </>
  );
};

export default Todo;
