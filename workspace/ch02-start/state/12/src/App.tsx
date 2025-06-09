import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  /**
   * setter 함수가 호출되는 즉시 리렌더링이 되지 않고 성능 최적화를 위해서 모아두었다가 한번에 만영됨(배치)
   */
  const tripleUpCount = () => {
    console.log("클릭시작", count);
    setCount((num) => num + 1);
    setCount((num) => num + 1);
    setCount((num) => num + 1);
    console.log("클릭종료", count);
  };
  const oneUpCount = () => {
    console.log("클릭시작", count);
    setCount(count + 1); // 0+1
    setCount(count + 1); // 2️⃣
    /** 2️⃣
     * 이 두 번째 호출에서도 count는 여전히 0이야.
     * 이유는 React의 setState (setCount)는 비동기 처리이기 때문에,
     * 첫 번째 setCount(count + 1)이 호출되었어도 바로 count 값을 변경하진 않아.
     * 즉, 이 시점에서 JavaScript는 아직 count가 바뀌었다는 걸 모름.
     * 그래서 또다시 0 + 1 = 1이 계산돼서 상태 변경 요청이 들어감.
     * 최종적으로는 3번 모두 같은 계산 0 + 1이 반복되면서 count는 1로만 갱신돼.
     */
    setCount(count + 1); // 0+1
    console.log("클릭종료", count);
  };

  return (
    <>
      <h2>12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
      <p>{count}</p>
      <button onClick={oneUpCount}>+1</button>
      <button onClick={tripleUpCount}>+3</button>
    </>
  );
}

export default App;
