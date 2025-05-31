import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();
  function handleTodo() {}
  return (
    <>
      <div className="w-auto mt-20 m-auto flex gap-2 justify-center">
        <input type="text"
          className="w-[50%] max-w-[740px] bg-transparent text-white font-semibold border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
          placeholder="Enter Todos"
        />
        <button
          onClick={handleTodo}
          className="rounded-full p-2 bg-white cursor-pointer"
        >
          Add Todo
        </button>

        
      </div>
    </>
  );
};

export default Todo;
