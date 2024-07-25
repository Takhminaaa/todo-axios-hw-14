import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import styled from "styled-components";

function TodoForm() {
  const [todoValue, setTodoValue] = useState("");
  const { addNewTodo } = useContext(TodoContext);

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    addNewTodo(todoValue);
    setTodoValue("");
  };

  return (
    <WrapperFormBtn onSubmit={submitHandler}>
      <StyledInput
        type="text"
        placeholder="Enter new todo..."
        value={todoValue}
        onChange={handleChange}
      />
      <StyledButton type="submit">Add todo</StyledButton>
    </WrapperFormBtn>
  );
}

export default TodoForm;

const WrapperFormBtn = styled.form`
  display: flex;
  justify-content: center;

  gap: 30px;
`;

const StyledInput = styled.input`
  width: 500px;
  height: 44px;
  border-radius: 12px;
  border: 2px solid #275938;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background-color: #275938;
  color: white;
  font-weight: 700;
  font-size: 18px;
  border: 2px solid white;
`;
