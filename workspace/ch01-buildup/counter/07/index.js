import Reaction from "./reaction.js";

function Header() {
  console.log("\tHeader 함수 호출됨");

  return Reaction.createElement(
    "header",
    { class: "header" },
    Reaction.createElement("h1", null, "Counter - 07 데이터(상태) 변경시 자동으로 UI 리렌더링"),
    Reaction.createElement(
      "p",
      null,
      "파일 경로: ",
      Reaction.createElement("span", { id: "filepath" }, `ch${document.URL.split("/ch")[1]}index.html`)
    )
  );
}

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

function App() {
  console.log("app 함수 호출됨");
  return Reaction.createElement("div", { id: "app" }, Header, Counter);
}

// root 요소에 app 추가
Reaction.createRoot(document.getElementById("root")).render(App);
