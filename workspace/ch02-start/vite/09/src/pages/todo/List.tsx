import type { TodoItem } from "../../App";
/**
 * 배열 list는 선언한곳이아니라 사용하는데서 타입정의를 해줘야하나요?
 * 배열의 매개변수의 타입을 필수지정하도록 만들어져 있음
 * 그리고 이 파일에서만 사용하기때문에 해당 파일에서 만들 수 있었음
 * interface 옮겨도 되고 안해 되고..
 */

interface TodoListprops {
  list: TodoItem[];
}

// Todo 목록을 전달받아서 출력해야 함
function TodoList({ list }: TodoListprops) {
  const itemList = list.map((item) => {

    return (
      <li key={item._id}>
        {item.title} - {item.done ? "완료" : "진행중"}
      </li>
    );
  });
  
  return <ul className="todolist">{itemList}</ul>;
}

export default TodoList;
