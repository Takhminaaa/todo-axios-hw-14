import React, { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";
import styled from "styled-components";

function TodoList() {
  const { array, deleteTodoHandler, updateHandler } = useContext(TodoContext);

  const [editinId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    deleteTodoHandler(id);
  };

  const handleUpdate = (id, item) => {
    updateHandler(id, item);
    setEditingId(null);
  };
  return (
    <StyledList>
      {array.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          isEdiiting={editinId === item.id}
          setEditingId={setEditingId}
        />
      ))}
    </StyledList>
  );
}

export default TodoList;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
