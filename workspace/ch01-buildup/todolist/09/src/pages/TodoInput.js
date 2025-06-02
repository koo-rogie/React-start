import Reaction from "../reaction.js";

/**
 * TodoInput 컴포넌트를 생성합니다.
 * @param {{ handleAddKeydown: function, handleAdd: function }} props - 입력 관련 이벤트 핸들러
 * @returns {HTMLElement} 입력 폼 요소
 */
function TodoInput(props) {
  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    console.log("추가 버튼 클릭");
    const inputElem = document.querySelector(".todoinput > input");
    if (inputElem.value.trim() !== "") {
      props.addItem(inputElem.value.trim());
      inputElem.value = "";
      inputElem.focus();
    }
  };

  /**
   * 엔터 키 입력 시 추가 동작을 실행합니다.
   * @param {KeyboardEvent} event - 키보드 이벤트 객체
   */
  const handleAddKeydown = (event) => {
    console.log("keydown", event);
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return Reaction.createElement(
    "div",
    { class: "todoinput" },
    Reaction.createElement("input", {
      type: "text",
      autofocus: true,
      onkeydown: (e) => {
        handleAddKeydown(e);
      },
    }),
    Reaction.createElement("button", { type: "button", onclick: handleAdd }, "추가")
  );

  /*
  <div class="todoinput">
    <input type="text" autofocus="true">
    <button type="button">추가</button>
  </div>
  
  */
}

export default TodoInput;
