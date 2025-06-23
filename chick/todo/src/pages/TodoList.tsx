import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [itme, setItem] = useState(itemList);

  const itemList = [
    { _id: 1, title: "자바스크립트 공부", done: true },
    { _id: 2, title: "JS 프로젝트", done: true },
    { _id: 3, title: "React 공부", done: false },
  ];

  const liList = itemList.map((item) => {
    return <TodoItem item={item} key={item._id} />;
  });

  return (
    <ul className="todolist">
      <>{liList}</>
    </ul>
  );
}
