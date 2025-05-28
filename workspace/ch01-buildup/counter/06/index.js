import Reaction from "./reaction.js";

function Header() {
  return Reaction.createElement(
    "header",
    { class: "header" },
    Reaction.createElement("h1", null, "Counter - 06 UI 구성 요소별 각각의 함수로 분리(컴포넌트로 만들기)"),
    Reaction.createElement(
      "p",
      null,
      "파일 경로: ",
      Reaction.createElement("span", { id: "filepath" }, `ch${document.URL.split("/ch")[1]}index.html`)
    )
  );
}

function Counter() {
  let count = 0;

  // 카운터 감소
  const handleDown = () => {
    // 데이터 갱신, count 값 감소
    count--;
    // 화면 갱신, count 값 화면에 표시
    document.querySelector("#counter > span").textContent = count;
  };

  // 카운터 증가
  const handleUp = () => {
    // 데이터 갱신, count 값 증가
    count++;
    // 화면 갱신, count 값 화면에 표시
    document.querySelector("#counter > span").textContent = count;
  };

  // 카운터 초기화
  const handleReset = () => {
    // 데이터 갱신, count 값 초기화
    count = 0;
    // 화면 갱신, count 값 화면에 표시
    document.querySelector("#counter > span").textContent = count;
  };

  return Reaction.createElement(
    "div",
    { id: "counter" },
    Reaction.createElement("button", { type: "button", onClick: handleDown }, "-"), // 빼기
    Reaction.createElement("button", { type: "button", onClick: (e) => handleReset(e) }, "RESET"), // 리셋
    Reaction.createElement("button", { type: "button", onClick: handleUp }, "+"), // 플러스
    Reaction.createElement("span", null, "0") // 값이 나올곳
  );
}

function App() {
  return Reaction.createElement("div", { id: "app" }, Header, Counter);
}

// root 요소에 app 추가
Reaction.createRoot(document.getElementById("root")).render(App);
