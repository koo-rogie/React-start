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

// 샘플 목록
const inititemList = [
  { num: 1, title: "자바스크립트 공부", done: true },
  { num: 2, title: "JS 프로젝트", done: true },
  { num: 3, title: "React 공부", done: false },
];

function Header() {
  return (
    <header>
      <h1>04 Todo List - React 컴포넌트 분리</h1>
      <p>
        파일 경로: <span id="filepath">{`ch${document.URL.split("/ch")[1]}index.html`}</span>
      </p>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>멋쟁이 사자처럼 FrontEnd BootCamp</p>
    </footer>
  );
}
function TodoInput() {
  return (
    <div className="todoinput">
      <input type="text" autoFocus />
      <button type="button">추가</button>
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>1</span>
      <span>
        <s>샘플1</s>
      </span>
      <button type="button">삭제</button>
    </li>
  );
}
function TodoList() {
  return (
    <ul className="todolist">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

function Todo() {
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <TodoInput />
            <TodoList />
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="todo">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
