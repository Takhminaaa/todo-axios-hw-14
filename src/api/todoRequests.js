import axios from "axios";

const BASE_URL = "https://6ae39c82375202ff.mokky.dev/todo-app";

export const getTodoRequest = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error("error", error);
  }
};

export const postTodoRequest = async (item) => {
  try {
    await axios.post(BASE_URL, item);
  } catch (error) {
    throw new Error("error", error);
  }
};

export const deleteTodoRequest = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    throw new Error("error", error);
  }
};

export const updateTodoRequest = async (id, item) => {
  try {
    await axios.patch(`${BASE_URL}/${id}`, item);
  } catch (error) {
    throw new Error("error", error);
  }
};
