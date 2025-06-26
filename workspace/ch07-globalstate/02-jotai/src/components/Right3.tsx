import { countAtom } from "@/jotai/atoms";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("#### Right3 렌더링.");
  });

  // const [count, setCount] = useAtom(countAtom);
  // const countUp = (step: number) => {
  //   setCount(count + step);
  // };

  // useSetAtom = atom 의 값만 세팅하는 작업을 할 것이다(리렌더링 안나게 하기 위한 방법)
  // Setter만 사용(구독하지 않음)
  const setCount = useSetAtom(countAtom);
  const countUp = (step: number) => {
    setCount((count) => count + step);
  };

  // 쓰기 전용 atom(로직을 atom에 정의)
  const countDown = useSetAtom(countAtom);

  return (
    <div>
      <button onClick={() => countDown(1)}>-1</button>
      <button onClick={() => countUp(1)}>+1</button>
      <h3>Right3</h3>
    </div>
  );
}

export default Right3;
