import Reaction from "../reaction.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";

/**
 * Todo 섹션을 렌더링합니다.
 * @returns {HTMLElement} Todo 섹션 요소
 */
function Todo(props) {
  return Reaction.createElement(
    "div",
    { id: "main" },
    Reaction.createElement(
      "div",
      { id: "container" },
      Reaction.createElement("ul", null, Reaction.createElement("li", null, Reaction.createElement("h2", null, "할일 목록"), TodoInput(props), TodoList(props)))
    )
  );
  /*
  <div id="main">
    <div id="container">
      ${TodoInput}
      ${TodoList}
    </div>
  </div>
  */
}

export default Todo;
