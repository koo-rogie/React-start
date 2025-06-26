import useCounterStoer from "@/zustand/counter";
import { useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("#### Right3 렌더링.");
  });

  // count를 사용하지 않더라도 CounterStoer의 모든 상태가 자동으로 구독되므로 count변경시 리렌더링 됨
  // 구조분해 할당으로 hook을 호출했기 때문에 이 컨포넌트도 리렌더링 됨
  // const { countReset, countDown, countUp } = useCounterStoer();

  // 렌더링 최적화를 위해서 필요한 상태만 선택적으로 구독
  const countUp = useCounterStoer((state) => state.countUp);
  const countReset = useCounterStoer((state) => state.countReset);
  const countDown = useCounterStoer((state) => state.countDown);

  // 리렌더링 발생
  // const count = useCounterStoer((state) => state.count);

  const getCount = useCounterStoer((state) => state.getCount);

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countDown(1)}>-1</button>
      <button onClick={() => countReset()}>0</button>
      <button onClick={() => countUp(1)}>+1</button>
      <button onClick={() => console.log(getCount())}>count 값 확인</button>
    </div>
  );
}

export default Right3;
