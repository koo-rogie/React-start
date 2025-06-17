/**
 * useAxios라는 라이브러리를 사용해서 변경
 */
import axios from "axios";
import { useEffect, useState } from "react";
// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = "https://fesp-api.koyeb.app/todo";
axios.defaults.baseURL = API_SERVER;
axios.defaults.timeout = 5000; //지정된 시간동안 응답을 받지 못하면 에러를 방생시킨다.

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

function useAxios<T>(fetchParams: FetchParams) {
  // Todo 목록을 저장할 상태 (초기값: null)
  const [data, setData] = useState<T | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);

  // 로딩 상태를 저장할 상태 (초기값: false)
  const [isLoading, setIsLoading] = useState(false);

  const requestFetch = async (params: FetchParams) => {
    console.log("fetchTodo 함수 호출됨", params);
    try {
      // 로딩 상태를 true로 설정
      setIsLoading(true);

      // axios API를 사용하여 서버에 GET 요청
      const res = await axios.get<T>(params.url);
      console.log("파싱된 데이터", res.data);

      setData(res.data);

      // if (jsonRes.ok) {
      //   // Todo 목록 상태 업데이트
      //   setData(jsonRes);
      //   setError(null);
      // } else {
      //   // 에러가 발생한 경우 에러 메시지 상태 업데이트
      //   throw new Error(jsonRes.error.message);
      // }
    } catch (err) {
      // 네트워크 오류 등 예외 발생시 처리
      console.error("에러 발생:", err);
      setError(err as Error);
      setData(null);
    } finally {
      // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };
  // 컴포넌트가 마운트될 때 Todo 목록을 가져오기
  useEffect(() => {
    // 1초 지연을 주어 API 호출 (로딩 상태 테스트를 위해)
    requestFetch(fetchParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

  return { isLoading, error, data };
}

export default useAxios;
