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

function App() {
  return (
    <div id="todo">
      <header>
        <h1>Todo List - 03 Todo List - React로 UI 구성(JSX)</h1>
        <p>
          파일 경로: <span id="filepath">{`ch${document.URL.split("/ch")[1]}index.html`}</span>
        </p>
      </header>
      <div id="main">
        <div id="container">
          <ul>
            <li>
              <h2>쇼핑 목록</h2>
              <div className="todoinput">
                <input type="text" autoFocus />
                <button type="button">추가</button>
              </div>
              <ul className="todolist">
                <li>
                  <span>1</span>
                  <span>
                    <s>샘플1</s>
                  </span>
                  <button type="button">삭제</button>
                </li>
                <li>
                  <span>2</span>
                  <span>
                    <s>샘플2</s>
                  </span>
                  <button type="button">삭제</button>
                </li>
                <li>
                  <span>3</span>
                  <span>
                    <s>샘플3</s>
                  </span>
                  <button type="button">삭제</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <p>멋쟁이 사자처럼 FrontEnd BootCamp</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
