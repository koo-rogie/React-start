import { useEffect, useState } from "react";
import Left1 from "@/components/Left1";
import Right1 from "@/components/Right1";
import "./App.css";
import { CounterContext } from "@/contexts/CounterContext";

function App() {
  // count가 수정되더라도 렌더링이 발생하지 않도록 counterContext로 상태 관리 로직 이동
  const [conut, setCount] = useState(5);

  const countUp = (step: number) => {
    setCount(conut + step);
  };

  useEffect(() => {
    console.log("# App 렌더링.");
  });

  const value = { conut, countUp };

  return (
    <>
      <h1>02 Context API - useContext 훅</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          {/* 3. context 제공하기 */}
          <CounterContext value={value}>
            <Left1 />
            <Right1 />
          </CounterContext>
        </div>
      </div>
    </>
  );
}

export default App;
