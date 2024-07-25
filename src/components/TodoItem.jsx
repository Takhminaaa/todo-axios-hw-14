import React, { useState } from "react";
import styled from "styled-components";

function TodoItem({
  title,
  id,
  handleDelete,
  setEditingId,
  isEdiiting,
  handleUpdate,
}) {
  const [editingText, setEdiningText] = useState(title);

  const handleChange = (e) => {
    setEdiningText(e.target.value);
  };
  return (
    <StyledList>
      {isEdiiting ? (
        <>
          <input type="text" value={editingText} onChange={handleChange} />
          <button onClick={() => handleUpdate(id, editingText)}>save</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <ContainerButton>
            <button onClick={() => handleDelete(id)}>delete</button>

            <button onClick={() => setEditingId(id)}>update</button>
          </ContainerButton>
        </>
      )}
    </StyledList>
  );
}

export default TodoItem;

const ContainerButton = styled.div`
  display: flex;
  gap: 15px;
  button {
    width: 85px;
    height: 35px;
    border-radius: 12px;
    border: none;
    background-color: #275938;
    color: white;
    font-weight: 700;
    font-size: 18px;
    border: 2px solid white;
  }
`;

const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  width: 600px;
  height: 55px;
  background-color: white;
  padding: 10px;
  color: #275938;
  font-size: 600;
  input {
    width: 250px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #275938;
    color: #275938;
    font-weight: 500;
    background-color: #ffff;
  }
  button {
    width: 85px;
    height: 35px;
    border-radius: 12px;
    border: none;
    background-color: #275938;
    color: white;
    font-weight: 700;
    font-size: 18px;
    border: 2px solid white;
  }
`;
