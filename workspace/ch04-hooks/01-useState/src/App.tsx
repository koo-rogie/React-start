// TODO 1. 메세지를 입력하면 입력 메세지에 반영되도록 수정

import React, { useState } from "react";

function App() {
  // 상태관리 useState
  const [msg, setMsg] = useState("");

  const changeMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  // 서버의 시간을 ajax로 요청
  const title = 124;

  return (
    <>
      <h1>01 useState - 상태 관리 {title}</h1>
      <div>
        {/* 
          <input type="text" value={msg}/>  
          여기까지 쓰면 에러 발생
        */}
        <input type="text" value={msg} onChange={changeMsg} />
        <br />
        <span>입력 메세지: {msg}</span>
      </div>
    </>
  );
}

export default App;
