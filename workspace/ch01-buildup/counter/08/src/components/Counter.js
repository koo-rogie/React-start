import Reaction from "../reaction.js";
function Counter() {
  console.log("\tCounter 함수 호출됨");

  const [count, setCount] = Reaction.useState(0); // 초기값 0

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

  return Reaction.createElement(
    "div",
    { id: "counter" },
    Reaction.createElement("button", { type: "button", onClick: handleDown }, "-"), // 빼기
    Reaction.createElement("button", { type: "button", onClick: (e) => handleReset(e) }, "RESET"), // 리셋
    Reaction.createElement("button", { type: "button", onClick: handleUp }, "+"), // 플러스
    Reaction.createElement("span", null, count) // 값이 나올곳
  );
}

export default Counter;
