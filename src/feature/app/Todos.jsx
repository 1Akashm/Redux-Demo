import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = [];

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid,
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

//export actions
export const {addTodo,removeTodo,toggleTodo} = TodoSlice.actions;

//export reducer
export default TodoSlice.reducer;