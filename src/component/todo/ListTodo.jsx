import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../feature/app/Todos";

const ListTodo = () => {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // Accept ID of todo to remove
  function deleteTodo(id) {
    dispatch(removeTodo(id));
  }

  return (
    <div className="mt-[40px] flex justify-center max-w-[740px] flex-col gap-4 h-auto w-full max-w-[800px] m-auto max-h-[40vh] overflow-y-auto custom-scrollbar">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="flex gap-2 px-5">
            <input
              className="bg-white text-black border-gray-300 w-full rounded focus:outline-none p-2 cursor-default"
              value={item.text}
              readOnly
            />
            <button
              onClick={() => deleteTodo(item.id)}
              className="bg-white text-gray-500 rounded p-2 hover:text-green-900 cursor-pointer font-semibold"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-white">No todos available</p>
      )}
    </div>
  );
};

export default ListTodo;
