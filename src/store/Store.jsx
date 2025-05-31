import { configureStore } from "@reduxjs/toolkit";
import TodoSlice  from "../feature/app/Todos";
import CounterSlice from "../feature/app/CounterSlice"

const Store = configureStore({
    reducer: {
        todo: TodoSlice,
        counter: CounterSlice
    }
})

export default Store