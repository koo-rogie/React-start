import type { KeyboardEvent } from "react";

interface todoInputProps {
  addItem: (title: string) => void;
}

function TodoInput({ addItem }: todoInputProps) {
  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    console.log("추가 버튼 클릭");
    const inputElem = document.querySelector(".todoinput > input");
    if (inputElem.value.trim() !== "") {
      addItem(inputElem.value.trim());
      inputElem.value = "";
      inputElem.focus();
    }
  };

  // 엔터 이벤트 핸들러
  const handleAddKeydown = (event: KeyboardEvent) => {
    console.log("keydown", event);
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="todoinput">
      <input type="text" onKeyDown={handleAddKeydown} autoFocus />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}

export default TodoInput;
