function Header() {
  console.log("\tHeader 함수 호출됨");

  return (
    <header>
      <h1>02 Counter - React로 구현(JSX)</h1>
      <p>
        파일 경로: <span id="filepath"> ${`ch${document.URL.split("/ch")[1]}index.html`}</span>
      </p>
    </header>
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

  return (
    <div id="counter">
      <button type="button" onClick={handleDown}>
        -
      </button>
      <button type="button" onClick={(e) => handleReset(e)}>
        RESET
      </button>
      <button type="button" onClick={handleUp}>
        +
      </button>
      <span>{count}</span>
    </div>
  );
}

function App() {
  console.log("app 함수 호출됨");
  return (
    <div id="app">
      <Header />
      <Counter />
    </div>
  );
}

// root 요소에 app 추가
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
