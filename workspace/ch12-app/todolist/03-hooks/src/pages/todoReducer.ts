import type { TodoItem } from "@pages/TodoItem";

type TodoAction = { type: "ADD"; value: TodoItem } | { type: "TOGGLE" | "DELETE"; value: { _id: number } };

// interface TodoAction {
//   type: "ADD" | "TOGGLE" | "DELETE";
//   value: TodoItem | { _id: number };
// }

function TodoReducer(state: TodoItem[], action: TodoAction) {
  // TODO 1. 상태관리 로직 작성
  switch (action.type) {
    case "ADD":
      return [...state, action.value];
    case "TOGGLE":
      return state.map((item) => (item._id === action.value._id ? { ...item, done: !item.done } : item));
    case "DELETE":
      return state.filter((item) => item._id !== action.value._id);

    default:
  }

  return state;
}
export default TodoReducer;
