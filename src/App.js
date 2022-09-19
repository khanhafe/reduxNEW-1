import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { IncrementState, DecrementState } from "./actions/index";

export default function App() {
  const mystate = useSelector((states) => states.counterReducer);
  const dispatch = useDispatch();
  const incrementfunc = () => {
    dispatch(IncrementState());
  };

  const decrementfunc = () => {
    dispatch(DecrementState());
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <input type="text" value={mystate} />

      <button onClick={incrementfunc}>Increment</button>
      <button onClick={decrementfunc}>Decrement</button>
    </div>
  );
}
