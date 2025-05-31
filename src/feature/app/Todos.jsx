import { createSlice, nanoid } from "@reduxjs/toolkit";

const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
const initialState = localTodos;

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: true,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

//export actions
export const { addTodo, removeTodo } = TodoSlice.actions;

//export reducer
export default TodoSlice.reducer;
