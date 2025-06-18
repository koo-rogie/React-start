// import useAxios from "@hooks/useAxios";
import { useEffect } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router";
// import type { TodoItemRes } from "types/todo";

export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

const item: TodoItem = {
  _id: 2,
  title: "자바스크립트 복습",
  content: "리액트도 당연히 복습.",
  done: false,
  createdAt: "2025.06.17 16:49:00",
  updatedAt: "2025.06.17 16:49:00",
};

function TodoInfo() {
  // console.log("로케이션", location);
  // const todoId = location.pathname.split("/").pop(); //
  // const { data } = useAxios<TodoItemRes>({ url: `/todolist/${todoId}?delay=1000` });

  // useParams
  // "/list/:_id" 정의된 path값이 있을때
  // 주소청의 값이 "/list/3" 일경우에 useParams()가 리턴하는 값은: {_id : 3}다
  const { _id } = useParams();

  // useMatch
  // 현재 요청된 URL 경로가 인자로 전달한 경로 패턴과 매칭되는지 확인 후 PathMatch 객체를 반환
  // ex) /list/:_id -> 참
  // ex) /45645152456/:_id -> 거짓
  const infoMatch = useMatch("/list/:_id");

  console.log(useParams());
  console.log(infoMatch);

  // const [item, setItem] = useState();
  useEffect(() => {
    // TODO API 서버와 통신해서 Item 받아오기
  }, []);

  return (
    // <div id="main">
    //   <h2>할일 상세 보기</h2>
    //   <div className="todo">
    //     <div>제목 : {data?.item.title}</div>
    //     <div>내용 : {data?.item.content}</div>
    //     <div>상태 : {data?.item.done ? "완료" : "미완료"}</div>
    //     <div>작성일 : {data?.item.createdAt}</div>
    //     <div>수정일 : {data?.item.updatedAt}</div>
    //     {infoMatch && (
    //       <>
    //         <Link to={`/list/${_id}/edit`}>수정</Link>
    //         <Link to="/list">목록</Link>
    //       </>
    //     )}
    //   </div>

    //   <Outlet />
    // </div>
    <div id="main">
      <h2>할일 상세 보기</h2>
      <div className="todo">
        <div>제목 : {item.title}</div>
        <div>내용 : {item.content}</div>
        <div>상태 : {item.done ? "완료" : "미완료"}</div>
        <div>작성일 : {item.createdAt}</div>
        <div>수정일 : {item.updatedAt}</div>
        {infoMatch && (
          <>
            <Link to={`/list/${_id}/edit`}>수정</Link>
            <Link to="/list">목록</Link>
          </>
        )}
      </div>
      <Outlet context={{ item }} />
      {/* Outlet 속성은 props로 하나밖에 못가지고옴, 그래서 객체로 넘김*/}
    </div>
  );
}

export default TodoInfo;
