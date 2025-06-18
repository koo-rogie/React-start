// import useAxios from "@hooks/useAxios";
import type { TodoItem } from "@pages/TodoInfo";
import type React from "react";
import { Link, useNavigate, useOutletContext } from "react-router";
// import type { TodoItemRes } from "types/todo";

interface OutletContextProps {
  item: TodoItem;
}

function TodoEdit() {
  // console.log("로케이션", location);
  // const todoId = location.pathname.split("/").pop(); //
  // const { data } = useAxios<TodoItemRes>({ url: `/todolist/${todoId}?delay=1000` });

  const navigate = useNavigate();
  // 수정버튼을 클릭시
  const updateTodo = (e: React.FormEvent) => {
    e.preventDefault(); // 실제 submit을 박음

    alert("할일이 수정되었습니다");

    // 수정되고나서 사용자 화면이동(상세보기)
    navigate(-1); // window.history.go(-1), 한페이지 전 화면을 보여줌
    // navigate(`list/1`); // list/1 을 보여줌, 하드코딩 => 이러면 현제 주소 뒤에 붙어서 무조건 절대경로 필수
    // navigate(`/list/1`); // list/1 을 보여줌, 하드코딩
  };
  const { item } = useOutletContext<OutletContextProps>();

  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={updateTodo}>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" defaultValue={item.title} autoFocus />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols={23} rows={5} defaultValue={item.content} />
          <br />
          <label htmlFor="done">완료 : </label>
          <input type="checkbox" id="done" defaultChecked={item.done} />
          <br />
          <button type="submit">수정</button> {/* */}
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
