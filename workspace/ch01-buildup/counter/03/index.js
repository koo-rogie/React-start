import { handleDown, handleReset, handleUp } from "./uirender.js";
import Reaction from "./reaction.js";

/* JS로 UI 구성 */
/* header 구성 */
// <h1>Counter - 02 JS로 UI 구성</h1>
const h1 = Reaction.createElement("h1", null, "Counter - 03 createElement() 함수 만들기");

// <p>파일 경로: <span id="filepath"></span></p>
const p = Reaction.createElement("p", null, "파일 경로: ", Reaction.createElement("span", { id: "filepath" }));

// <header></header>
const Header = Reaction.createElement("header", null, h1, p);

/* counter 구성 */
// <button type="button" onclick="handleDown()">-</button>
const downBtn = Reaction.createElement("button", { type: "button" }, "-");
// downBtn.setAttribute("onclick", `${handleDown()}`);
downBtn.addEventListener("click", handleDown);

// <button type="button" onclick="handleReset(event)">0</button>
const resetBtn = Reaction.createElement("button", { type: "button" }, "RESET");
// resetBtn.setAttribute("onclick", `${handleReset(event)}`);
resetBtn.addEventListener("click", handleReset);

// <button type="button" onclick="handleUp()">+</button>
const upBtn = Reaction.createElement("button", { type: "button" }, "+");
// upBtn.setAttribute("onclick", `${handleUp()}`);
upBtn.addEventListener("click", handleUp);

// <span>0</span>
const span = Reaction.createElement("span", null, "0");

// <div id="counter">
const Counter = Reaction.createElement("div", { id: "counter" }, downBtn, resetBtn, upBtn, span);

/* app 구성 */
// <div id="app">
const App = Reaction.createElement("div", { id: "app" }, Header, Counter);

// root 요소에 app 추가
document.querySelector("#root").appendChild(App);
