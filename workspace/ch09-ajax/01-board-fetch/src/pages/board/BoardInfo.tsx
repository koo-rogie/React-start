import CommentList from "@/pages/board/CommentList";
import type { BoardInfoType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function BoardInfo() {
  const [data, setData] = useState<BoardInfoType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  //Fetch API 사용
  // API 서버에 1번 게시물의 상세정보를 fetch() 요청으로 보낸다

  const requestInfo = async () => {
    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);
      const response = await fetch("https://fesp-api.koyeb.app/market/posts/1?delay=500", {
        headers: {
          "client-id": "openmarket",
        }, // key value 쌍이니 객체로 만들어야함
      });
      console.log("response", response);

      // 이과정에서 500에러가 나면 서버쪽에서 나오는 에러들을 확인하기 위해서 응답 데이터를 불러와야함
      const jsonDate = await response.json(); // 응답 body 에러 불러오기
      console.log("jsonDate", jsonDate);

      if (jsonDate.ok) {
        // 응답이 성공일 경우 게시물 상세 정보 출력
        setData(jsonDate.item);
        setError(null);
      } else {
        // 응답이 실패일 경우 에러 메세지 출력
        throw new Error(jsonDate.message);
      }
    } catch (err) {
      console.error(err);
      setError(err as Error); // 타입단언
    } finally {
      // 성공, 실패와 관련없이 로딩 상태를 false로 지정
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestInfo();
  }, []); // 마운트 후에 한번만 실행

  return (
    <>
      <h1>01 Fetch API</h1>
      {isLoading && <p style={{ color: "red" }}>로딩중..</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {data && ( // 데이터가 있을 경우에만 출력
        <>
          <h2>
            {data._id}. {data.title}
          </h2>
          <p>{data.content}</p>
          <CommentList />
        </>
      )}
    </>
  );
}

export default BoardInfo;
