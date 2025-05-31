import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ListTodo from "./ListTodo";
import { addTodo } from "../../feature/app/Todos";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  function handleTodo() {
    if (todo.trim() !== "") {
      dispatch(addTodo(todo));
      setTodo("");
    }
  }
  return (
    <>
      <div className="w-auto mt-20 m-auto flex gap-2 justify-center">
        <input
          type="text"
          className="w-[50%]
           max-w-[740px] 
          bg-transparent 
          text-white 
          font-semibold
           border-b-2 border-gray-300 
           focus:border-blue-500
            focus:outline-none"
          placeholder="Enter Todos"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={handleTodo}
          className="rounded-full p-2 bg-white cursor-pointer font-semibold text-gray-400 hover:text-green-900"
        >
          Add Todo
        </button>
      </div>
      <ListTodo />
    </>
  );
};

export default Todo;
