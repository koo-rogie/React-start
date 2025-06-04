import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoItemProps {
  toggleDone: (num: number) => void;
  deleteItem: (num: number) => void;
  itemList: TodoItemType[];
}

function TodoList({ itemList, toggleDone, deleteItem }: TodoItemProps) {
  const item = itemList.map((item) => {
    return <TodoItem key={item.num} item={item} toggleDone={toggleDone} deleteItem={deleteItem} />;
  });
  return <ul className="todolist">{item}</ul>;
}
export default TodoList;
