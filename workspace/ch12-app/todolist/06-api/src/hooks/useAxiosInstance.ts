/**
 * useAxios라는 라이브러리를 사용해서 변경
 */

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = "https://fesp-api.koyeb.app/todo";

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: API_SERVER, // 기본 URL
    timeout: 1000 * 5,
    headers: {
      "Content-Type": "application/json", // 요청 바디의 데이터 타입
      // 설정하지 않을 경우 크롬일 경우  "application/json, text/plain, */*"
      Accept: "application/json", // 응답 바디의 데이터 타입이 json이면 좋겠음
    },
  });
  return instance;
}

export default useAxiosInstance;
