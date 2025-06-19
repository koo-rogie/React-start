import type { TodoItem } from "@pages/TodoInfo";
import { Link } from "react-router";

interface TodoListItemProps {
  item: TodoItem;
  handleDelet: (_id: number) => void;
}
function TodoListItem({ item, handleDelet }: TodoListItemProps) {
  return (
    <li>
      <span>{item._id}</span>
      <Link to={`/list/${item._id}`}> {item.done ? <s>{item.title}</s> : item.title}</Link>
      <button type="button" onClick={() => handleDelet(item._id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoListItem;
