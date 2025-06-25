import CounterContext from "@/context/CounterContext";
import { use, useEffect } from "react";

function Right3() {
  const { countUp, reset, countDown } = use(CounterContext);

  useEffect(() => {
    console.log("#### Right3 렌더링.");
  });
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countDown(1)}>-1</button>
      <button onClick={() => reset()}>0</button>
      <button onClick={() => countUp(1)}>+1</button>
    </div>
  );
}

export default Right3;
