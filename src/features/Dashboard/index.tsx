import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CounterState } from "../Counter/counterSlice";

export const Dashboard = () => {
  const count = useSelector<RootState, CounterState>(
    (state) => state.counter
  ).value;
  return (
    <>
      <h2>Dasboard</h2>
      <p>Count: {count}</p>
    </>
  );
};
