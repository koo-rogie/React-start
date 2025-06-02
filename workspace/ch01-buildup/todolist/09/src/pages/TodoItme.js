import Reaction from "../reaction.js";

/**
 * TodoItem 컴포넌트를 생성합니다.
 * @param {{ item: { num: number, title: string, done: boolean } }} param0 - 렌더링할 아이템 정보
 * @returns {HTMLElement} 리스트 아이템 요소
 */
function TodoItem({ item, toggleDone, deleteItem }) {
  return Reaction.createElement(
    "li",
    { "data-num": item.num },
    Reaction.createElement("span", null, item.num),
    Reaction.createElement("span", { onclick: () => toggleDone(item.num) }, item.done ? Reaction.createElement("s", null, item.title) : item.title),
    Reaction.createElement(
      "button",
      {
        type: "button",
        onclick: () => deleteItem(item.num),
      },
      "삭제"
    )
  );

  /*
  num="1", title="가나다" 일때
    <li data-num="1">
      <span>1</span>
      <span>가나다</span>
      <button type="button">삭제</button>
    </li>
  */
}

export default TodoItem;
