import React, { useState } from "react";

// 전역변수로 사용하게 될 경우 다른 곳에서 재 사용할 경우 해당 값이 공유가 된다.
// let count = 0;
function Message() {
  const [msg, setMsg] = useState("");
  // 컴포넌트가 리렌더링 되더라도 이전 상태값이 유지 됨
  // 상태값이 바뀌면 화면도 리렌더링 한다
  const [count, setCount] = useState(0);

  // 지역변수이기 때문에 리렌더링되면 0으로 초기화됨
  // let count = 0;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputMsg = event.target.value;
    setMsg(inputMsg);
    // 지역변수이기 때문에 리렌더링되면 0으로 초기화됨
    setCount(count + 1);
  };
  return (
    <div>
      <input type="text" value={msg} onChange={handleChange} />
      <br />
      <span>입력메세지: {msg} </span>
      <br />
      <span>입력횟수: {count}</span>
      <hr />
    </div>
  );
}

export default Message;
