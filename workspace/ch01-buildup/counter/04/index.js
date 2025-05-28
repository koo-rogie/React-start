import { handleDown, handleReset, handleUp } from "./uirender.js";
import Reaction from "./reaction.js";

/* JS로 UI 구성 */
// <div id="app">
const App = Reaction.createElement(
  "div",
  { id: "app" },
  Reaction.createElement(
    "header",
    null,
    Reaction.createElement("h1", null, "Counter - 04 createElement() 함수 하나로 통합"),
    Reaction.createElement("p", null, "파일 경로: ", Reaction.createElement("span", { id: "filepath" }))
  ),
  Reaction.createElement(
    "div",
    { id: "counter" },
    Reaction.createElement("button", { type: "button", onClick: handleDown }, "-"),
    Reaction.createElement("button", { type: "button", onClick: handleReset }, "RESET"),
    Reaction.createElement("button", { type: "button", onClick: handleUp }, "+"),
    Reaction.createElement("span", null, "0")
  )
);

// root 요소에 app 추가
document.querySelector("#root").appendChild(App);
