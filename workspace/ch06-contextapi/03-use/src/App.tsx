import { useEffect } from "react";
import Left1 from "@/components/Left1";
import Right1 from "@/components/Right1";
import "./App.css";
import { CounterProvider } from "@/context/CounterContext";

function App() {
  // count가 수정되더라도 렌더링이 발생하지 않도록 counterContext로 상태 관리 로직 이동

  useEffect(() => {
    console.log("# App 렌더링.");
  });

  return (
    <>
      <h1>03 Context API - use 훅</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          <CounterProvider>
            <Left1 />
            <Right1 />
          </CounterProvider>
        </div>
      </div>
    </>
  );
}

export default App;
