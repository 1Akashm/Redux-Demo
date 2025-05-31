import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../feature/app/Todos";
import CounterSlice from "../feature/app/CounterSlice";

const Store = configureStore({
  reducer: {
    todo: TodoSlice,
    counter: CounterSlice,
  },
});

// Save to localStorage whenever the store changes
Store.subscribe(() => {
  const state = Store.getState();
  localStorage.setItem("todos", JSON.stringify(state.todo));
});

export default Store;
