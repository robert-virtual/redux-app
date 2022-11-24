import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CounterState, decrement, increment, incrementBy } from "./counterSlice";

export const Counter = () => {
  const count = useSelector<RootState, CounterState>(
    (state) => state.counter
  ).value;
  const dispatch = useDispatch()
  const [incrementValue, setIncrementBy] = useState(1);
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <input
        value={incrementValue}
        onChange={({ target: { value } }) => setIncrementBy(Number(value))}
      />
      <button onClick={()=>dispatch(incrementBy(incrementValue))}>increment by {incrementValue}</button>
    </>
  );
};
