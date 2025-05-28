import * as counter from "./index.js";

window.handleDown = counter.handleDown;
window.handleUp = counter.handleUp;
window.handleReset = counter.handleReset;

/* JS로 UI 구성 */
/* header 구성 */
// <h1>Counter - 02 JS로 UI 구성</h1>
const h1 = document.createElement("h1");
const h1Txt = document.createTextNode("Counter - 02 JS로 UI 구성");
h1.appendChild(h1Txt);

// <p>파일 경로: <span id="filepath"></span></p>
const p = document.createElement("p");
const pTxt = document.createTextNode("파일 경로: ");
const filepath = document.createElement("span");
filepath.setAttribute("id", "filepath");
p.appendChild(pTxt);
p.appendChild(filepath);

// <header></header>
const Header = document.createElement("header");
Header.appendChild(h1);
Header.appendChild(p);

/* counter 구성 */
// <button type="button" onclick="handleDown()">-</button>
const downBtn = document.createElement("button");
const downBtnTxt = document.createTextNode("-");
downBtn.setAttribute("type", "button");
// downBtn.setAttribute("onclick", `${handleDown()}`);
downBtn.addEventListener("click", handleDown);
downBtn.appendChild(downBtnTxt);

// <button type="button" onclick="handleReset(event)">0</button>
const resetBtn = document.createElement("button");
resetBtn.setAttribute("type", "button");
// resetBtn.setAttribute("onclick", `${handleReset(event)}`);
resetBtn.addEventListener("click", handleReset);
const restBtnTxt = document.createTextNode("RESET");
resetBtn.appendChild(restBtnTxt);

// <button type="button" onclick="handleUp()">+</button>
const upBtn = document.createElement("button");
upBtn.setAttribute("type", "button");
// upBtn.setAttribute("onclick", `${handleUp()}`);
upBtn.addEventListener("click", handleUp);
const upBtnTxt = document.createTextNode("+");
upBtn.appendChild(upBtnTxt);

// <span>0</span>
const span = document.createElement("span");
const spanTxt = document.createTextNode(0);
span.appendChild(spanTxt);

// <div id="counter">
const Counter = document.createElement("div");
Counter.setAttribute("id", "counter");
Counter.appendChild(downBtn);
Counter.appendChild(resetBtn);
Counter.appendChild(upBtn);
Counter.appendChild(span);

/* app 구성 */
// <div id="app">
const App = document.createElement("div");
App.setAttribute("id", "app");
App.appendChild(Header);
App.appendChild(Counter);

// root 요소에 app 추가
document.querySelector("#root").appendChild(App);
