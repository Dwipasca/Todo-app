import React from "react";
import { useDisclosure, Button, Box } from "@chakra-ui/react";

// component
import ModalDetailTodo from "../ModalDetailTodo";

const Todo = ({ todo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {todo.status === 0 && (
        <Box bg="red">
          <Button onClick={onOpen} isFullWidth>
            {todo.title}
          </Button>
        </Box>
      )}

      {todo.status === 1 && (
        <Box bg="green">
          <Button onClick={onOpen} isFullWidth>
            {todo.title}
          </Button>
        </Box>
      )}

      {isOpen && (
        <ModalDetailTodo isOpen={isOpen} onClose={onClose} todo={todo} />
      )}
    </div>
  );
};

export default Todo;
