import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incremented } from "../feature/app/CounterSlice";

const Increment = () => {
  const dispatch = useDispatch();
  const count  = useSelector((state) => state.counter);
  function handleInc() {
    dispatch(incremented());
  }
  return (
    <>
      <p>count: {count}</p>
      <button onClick={handleInc}>Inc</button>
    </>
  );
};

export default Increment;
