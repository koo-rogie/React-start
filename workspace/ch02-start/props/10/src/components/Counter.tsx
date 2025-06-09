import Button from "@components/Button";
import React, { useState } from "react";

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
  const handleReset = (e: React.MouseEvent) => {
    console.log("리셋", e.type);
    setCount(0); // 데이터 갱신, count 값 초기화
  };

  return (
    <div id="counter">
      <Button type="button" onClick={handleDown} children={"-_-"} color={"pink"} size={"24px"} />
      <Button type="reset" onClick={(e) => handleReset(e)} children={"RESET"} color={""} size={"24px"} />
      <Button type="submit" onClick={handleUp} children={"+_+"} color={"skyblue"} size={"24px"} />
      <span>{count}</span>
    </div>
  );
}

export default Counter;
