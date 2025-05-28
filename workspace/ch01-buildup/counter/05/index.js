import { handleDown, handleReset, handleUp } from "./uirender.js";
import Reaction from "./reaction.js";

function App() {
  return Reaction.createElement(
    "div",
    { id: "app" },
    Reaction.createElement(
      "header",
      null,
      Reaction.createElement("h1", null, "Counter - 05 createRoot(), render() 함수 만들기"),
      Reaction.createElement(
        "p",
        null,
        "파일 경로: ",
        Reaction.createElement("span", { id: "filepath" }, `ch${document.URL.split("/ch")[1]}index.html`)
      )
    ),
    Reaction.createElement(
      "div",
      { id: "counter" },
      Reaction.createElement("button", { type: "button", onClick: handleDown }, "-"), // 빼기
      Reaction.createElement("button", { type: "button", onClick: (e) => handleReset(e) }, "RESET"), // 리셋
      Reaction.createElement("button", { type: "button", onClick: handleUp }, "+"), // 플러스
      Reaction.createElement("span", null, "0") // 값이 나올곳
    )
  );
}

// root 요소에 app 추가
Reaction.createRoot(document.getElementById("root")).render(App);