import { useState } from "react";

function Counter() {
  console.log("\tCounter 함수 호출됨");

  const [count, setCount] = useState(0); // 초기값 0

  // 카운터 감소
  const handleDown = () => {
    setCount(count - 1); // 데이터 갱신, count 값 감소
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + 1); // 데이터 갱신, count 값 증가
  };

  // 카운터 초기화
  const handleReset = () => {
    setCount(0); // 데이터 갱신, count 값 초기화
  };

  return (
    <div id="counter">
      <button type="button" onClick={handleDown}>
        -
      </button>
      <button type="button" onClick={() => handleReset()}>
        RESET
      </button>
      <button type="button" onClick={handleUp}>
        +
      </button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
