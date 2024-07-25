import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      <StyledText>Todo-axios</StyledText>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

const StyledText = styled.h1`
  color: #275938;
  text-align: center;
`;
