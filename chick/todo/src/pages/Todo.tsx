import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

interface TodoProps {
  itemList: TodoItem[];
  addItem: (title: string) => void;
  toggleDone: (_id: number) => void;
  deleteItem: (_id: number) => void;
}
function Todo(props) {
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <TodoInput addItem={props.addItem} />
      <TodoList />
    </div>
  );
}

export default Todo;
