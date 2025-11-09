import React from "react";
import { useCounter } from "./useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;