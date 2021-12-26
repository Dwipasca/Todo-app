import React from "react";
import { useDisclosure, Button } from "@chakra-ui/react";

// component
import ModalDetailTodo from "../ModalDetailTodo";

const Todo = ({ todo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {todo.status === 0 && (
        <Button onClick={onOpen} isFullWidth colorScheme="red">
          {todo.title}
        </Button>
      )}

      {todo.status === 1 && (
        <Button onClick={onOpen} isFullWidth colorScheme="green">
          {todo.title}
        </Button>
      )}

      {isOpen && (
        <ModalDetailTodo isOpen={isOpen} onClose={onClose} todo={todo} />
      )}
    </div>
  );
};

export default Todo;
