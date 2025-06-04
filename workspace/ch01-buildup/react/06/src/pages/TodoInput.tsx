import { useState, type KeyboardEvent } from "react";

interface todoInputProps {
  addItem: (title: string) => void;
}

function TodoInput({ addItem }: todoInputProps) {
  // 리렌더링 되면 일반 inpu요소의 값은 사라지므로 state로 관리
  // react에서는 dom을 사용하지 않기 때문에 상태 추가를 함

  const [title, setTitle] = useState(""); // 초기값 빈 메세지

  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    console.log("추가 버튼 클릭");
    addItem(title); // 추가될 title값 = value
    setTitle(""); // 비우는 명령어 추가가 됐으니까 빈 명령어로 만들기
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
      <input type="text" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={handleAddKeydown} />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}

export default TodoInput;
