import Reaction from "../reaction.js";

// 헤더 컴포넌트를 렌더링합니다.
function Header() {
  return Reaction.createElement(
    "header",
    null,
    Reaction.createElement("h1", null, "Todo List - 09 컴포넌트를 모듈로 분리"),
    Reaction.createElement("p", null, "파일 경로: ", Reaction.createElement("span", { id: "filepath" }, `ch${location.href.split("/ch")[1]}index.html`))
  );
  /*
  <header>
    <h1>Todo List - 09 컴포넌트를 모듈로 분리</h1>
    <p>파일 경로: <span id="filepath">ch${location.href.split("/ch")[1]}index.html</span></p>
  </header>
  */
}
export default Header;
