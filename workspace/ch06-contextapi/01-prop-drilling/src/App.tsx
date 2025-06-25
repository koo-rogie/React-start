/**
 * 프롭 드릴링 (Prop Drilling)
 *
 * 상위 컴포넌트(App)에서 하위 컴포넌트(Left3, Right3)까지 데이터를 전달할 때,
 * 중간 컴포넌트들(Left1, Left2, Right1, Right2)을 거쳐 props를 계속 전달하는 방식.
 *
 * - 장점: 구조가 단순할 경우에는 간단하게 데이터 전달이 가능함.
 * - 단점: 컴포넌트 트리가 깊어지면 유지보수가 어렵고, 중간 컴포넌트가 props 전달에만 집중하게 되어
 *         코드의 가독성과 재사용성이 떨어짐.
 */
import { useEffect, useState } from "react";
import Left1 from "@/components/Left1";
import Right1 from "@/components/Right1";
import "./App.css";

function App() {
  const [conut, setCount] = useState(5);

  useEffect(() => {
    console.log("# App 렌더링.");
  });

  const countUp = (step: number) => {
    setCount(conut + step);
  };

  return (
    <>
      <h1>01 Prop Drilling</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          <Left1 conut={conut} />
          <Right1 countUp={countUp} />
        </div>
      </div>
    </>
  );
}

export default App;
