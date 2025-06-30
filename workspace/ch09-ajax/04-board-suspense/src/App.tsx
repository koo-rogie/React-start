import BoardInfo from "@/pages/board/BoardInfo";
import "./app.css";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<p>Suspense | 게시글 로딩중입니다 잠시만 기다려주세요</p>}>
      <BoardInfo />
    </Suspense>
  );
}

export default App;
