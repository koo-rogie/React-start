import "./App.css";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 50, y: 150 });
  const pointerMoving = (event: React.MouseEvent) => {
    console.log(event.pageX, event.pageY);
    // 리렌더링 되지 않음
    // position.x = event.pageX;
    // position.y = event.pageY;

    // 리렌더링 됨(새로운 객체로 생성)
    const newPosition = {
      x: event.pageX,
      y: event.pageY,
    };

    setPosition(newPosition);
  };

  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <p>마우스 따라가기</p>
      <div className="container" onPointerMove={pointerMoving}></div>
      <div className="circle" style={{ pointerEvents: "none", transform: `translate(${position.x}px, ${position.y}px)` }}></div>
    </>
  );
}

export default App;
