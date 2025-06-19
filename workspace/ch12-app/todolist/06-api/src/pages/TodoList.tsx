// import useAxios from "@hooks/useAxios";
import type { TodoItem } from "@pages/TodoInfo";
import TodoListItem from "@pages/TodoListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router";
// import type { TodoListRes } from "types/todo";

interface TodoList {
  items: TodoItem[];
}
const dummyData: TodoList = {
  items: [
    {
      _id: 1,
      title: "잠자기",
      done: true,
      createdAt: "2025.06.16 16:49:00",
      updatedAt: "2025.06.16 16:49:00",
    },
    {
      _id: 2,
      title: "자바스크립트 복습",
      done: false,
      createdAt: "2025.06.17 16:49:00",
      updatedAt: "2025.06.17 16:49:00",
    },
  ],
};

function TodoList() {
  // const { isLoading, error, data } = useAxios<TodoListRes>({ url: "/todolist?delay=1000" });

  // console.log("App 랜더링", isLoading, error, data);

  const [data, setDate] = useState<TodoList | null>(null);

  // 할일 목록은 API에서 조회
  const fetchTodoList = () => {
    // 아직은 서버랑 연결을 안했으니 더미데이터로
    console.log("API서버에 목록 요청");
    setDate(dummyData);
  };

  // 삭제 처리
  const handleDelet = (_id: number) => {
    // 아직은 서버랑 연결을 안했으니 더미데이터로
    // API 서버에 삭제 요청
    console.log("API서버에 삭제 요청", _id);
    alert(`${_id}번 삭제가 완료됐습니다 `);

    // API 서버에 목록 요창
    fetchTodoList();
  };

  // 부수효과때문에 hook사용
  useEffect(() => {
    fetchTodoList();
  }, []); // 빈 배열을 전달해서 마운트 시에만 실행

  const itemList = data?.items.map((item) => <TodoListItem key={item._id} item={item} handleDelet={handleDelet} />);

  return (
    <>
      <div id="main">
        <h2>할일 목록</h2>
        <div className="todo">
          <Link to="/add">추가</Link>
          <br />
          <form className="search">
            <input type="text" autoFocus />
            <button type="submit">검색</button>
          </form>
          <ul className="todolist">
            <>{itemList}</>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
