import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router";

export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

function TodoInfo() {
  const axiosInstance = useAxiosInstance();
  // "/list/:_id" 정의된 path 값이 있을 때
  // 주소창의 값이 "/list/3" 일 경우 useParams()가 리턴하는 값: { _id: 3 }
  const { _id } = useParams();

  console.log(useParams());

  const infoMatch = useMatch("/list/:_id");

  const [data, setData] = useState<TodoItem | null>(null);

  const fetchTodoInfo = async () => {
    console.log("API 서버에 상세 정보 요청");

    try {
      // 정상 사이트에 접근 할 경우에 나옴
      const res = await axiosInstance.get<{ item: TodoItem }>(`/todolist/${_id}`);
      setData(res.data?.item);
    } catch (err) {
      // 이미 삭제된 페이지에 접근 할 경우 나옴
      console.error("일정 조회에 실패했습니다.");
      alert("일정 조회에 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchTodoInfo();
  }, []); // 빈 배열을 전달해서 마운트시에만 실행

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>

      {data && (
        <>
          <div className="todo">
            <div>제목 : {data.title}</div>
            <div>내용 : {data.content}</div>
            <div>상태 : {data.done ? "완료" : "미완료"}</div>
            <div>작성일 : {data.createdAt}</div>
            <div>수정일 : {data.updatedAt}</div>

            {infoMatch && (
              <>
                <Link to={`/list/${_id}/edit`}>수정</Link>
                <Link to="/list">목록</Link>
              </>
            )}
          </div>

          <Outlet context={{ item: data }} />
        </>
      )}
    </div>
  );
}

export default TodoInfo;
