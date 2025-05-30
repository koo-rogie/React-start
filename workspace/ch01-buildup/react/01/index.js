function Header() {
  console.log("\tHeader 함수 호출됨");

  return React.createElement(
    "header",
    null,
    React.createElement("h1", null, "01 Counter - React로 구현(React.createElement)"),
    React.createElement("p", null, "파일 경로: ", React.createElement("span", { id: "filepath" }, `ch${document.URL.split("/ch")[1]}index.html`))
  );
}

function Counter() {
  console.log("\tCounter 함수 호출됨");

  const [count, setCount] = React.useState(0); // 초기값 0

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

  return React.createElement(
    "div",
    { id: "counter" },
    React.createElement("button", { type: "button", onClick: handleDown }, "-"), // 빼기
    React.createElement("button", { type: "button", onClick: (e) => handleReset(e) }, "RESET"), // 리셋
    React.createElement("button", { type: "button", onClick: handleUp }, "+"), // 플러스
    React.createElement("span", null, count) // 값이 나올곳
  );
}

function App() {
  console.log("app 함수 호출됨");
  return React.createElement("div", { id: "app" }, React.createElement(Header), React.createElement(Counter));
}

// root 요소에 app 추가
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
