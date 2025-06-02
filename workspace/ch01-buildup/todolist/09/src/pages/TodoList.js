import Reaction from "../reaction.js";
import TodoItem from "./TodoItme.js";

/**
 * TodoList 컴포넌트를 생성합니다.
 * @param {{ itemList: { num: number, title: string, done: boolean }[] }} param0 - 아이템 배열
 * @returns {HTMLElement} 리스트 요소
 */
function TodoList({ itemList, toggleDone, deleteItem }) {
  const items = itemList.map((item) => TodoItem({ item, toggleDone, deleteItem }));
  return Reaction.createElement("ul", { class: "todolist" }, items);
  /*
  <ul class="todolist">`${items}`</ul>
  */
}

export default TodoList;
