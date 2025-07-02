import axios from "axios";

export default function useAxiosInstance() {
  // 초기값 세팅
  const instance = axios.create({
    baseURL: "https://fesp-api.koyeb.app/todo/",
    timeout: 1000 * 5, // 응답이 `timeout(밀리초)`보다 오래 걸리면 요청이 중단되고 timeout 에러 발생
    headers: {
      "Content-Type": "application/json", // 요청 바디의 데이터 타입
      Accept: "application/json", // 기대하는 응답 데이터 타입
    },
  });

  return instance;
}
