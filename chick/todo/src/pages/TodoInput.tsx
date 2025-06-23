import { useState, type KeyboardEvent } from "react";
interface TodoInputProps {
  addItem: (title: string) => void;
}
export default function TodoInput({ addItem }: TodoInputProps) {
  const [data, setDate] = useState("");

  const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (title.trim() !== "") {
      addItem(title);
      setTitle("");
    }
    setDate(e.target.value);
  };
  const handleAddKeydown = (event: KeyboardEvent) => {
    if (event.nativeEvent.isComposing) return; // 글자가 완성되지 않았을 경우 무시한다.(Mac 사용자)
    if (event.key === "Enter") handleAdd();
  };
  return (
    <div className="todoinput">
      <input type="text" autoFocus value={data} onChange={handleAdd} onKeyDown={handleAddKeydown} />
      <button type="button">추가</button>
      <br />
      <span>입력된 데이터: {data}</span>
    </div>
  );
}
