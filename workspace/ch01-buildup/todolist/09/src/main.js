import Reaction from "../../reaction.js";
import App from "./App.js";

/*
        ┌───────── App ──────────┐  ← 최상위 컴포넌트
        │           │            │
      Header       Todo        Footer  ← 주요 섹션 컴포넌트들
                    │
                ┌───┴────┐             ← Todo 내부 구조
          TodoInput   TodoList         ← 입력부와 목록부
                         │
                      TodoItem         ← 개별 할일 아이템
*/

Reaction.createRoot(document.querySelector("#root")).render(App);
