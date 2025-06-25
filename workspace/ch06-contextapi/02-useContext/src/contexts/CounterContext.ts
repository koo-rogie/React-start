import { createContext } from "react";

interface CounterContextType {
  conut: number;
  countUp: (step: number) => void;
} // 다른값으로 사용할 가능성 방지

// 1. Context 생성
export const CounterContext = createContext<CounterContextType>({
  conut: 5,
  // 테스트용 초기값 설정
  countUp: () => {
    console.log("초기값만 되었음, 실제 함수 구현안됨");
  }, // 빈 함수로 지정
});
