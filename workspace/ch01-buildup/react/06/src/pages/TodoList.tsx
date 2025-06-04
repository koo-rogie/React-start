import TodoItem from "./TodoItem";

function TodoList({ itemList, toggleDone, deleteItem }) {
  const item = itemList.map((item) => {
    return <TodoItem key={item.num} item={item} toggleDone={toggleDone} deleteItem={deleteItem} />;
  });
  return <ul className="todolist">{item}</ul>;
}
export default TodoList;