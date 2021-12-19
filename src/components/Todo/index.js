import React from "react";
import { useDisclosure } from "@chakra-ui/react";

import ModalDetailTodo from "../ModalDetailTodo";

const Todo = ({ todo }) => {
  // const { isDetailOpen, onDetailOpen, onDetailClose } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <button onClick={onOpen}>{todo.title}</button>

      {isOpen && (
        <ModalDetailTodo isOpen={isOpen} onClose={onClose} todo={todo} />
      )}
    </div>
  );
};

export default Todo;
