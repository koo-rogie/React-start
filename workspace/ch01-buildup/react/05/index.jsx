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

function Header() {
  return (
    <header>
      <h1>05 Todo List - React 기능 추가</h1>
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

function TodoInput({ addItem }) {
  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    console.log("추가 버튼 클릭");
    const inputElem = document.querySelector(".todoinput > input");
    if (inputElem.value.trim() !== "") {
      addItem(inputElem.value.trim());
      inputElem.value = "";
      inputElem.focus();
    }
  };

  // 엔터 이벤트 핸들러
  const handleAddKeydown = (event) => {
    console.log("keydown", event);
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="todoinput">
      <input type="text" onKeyDown={handleAddKeydown} autoFocus />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}

function TodoItem({ item }) {
  return (
    <li>
      <span>{item.num}</span>
      <span>{item.done ? <s>{item.title}</s> : item.title}</span>
      <button type="button">삭제</button>
    </li>
  );
}

function TodoList({ itemList }) {
  const item = itemList.map((item) => {
    return <TodoItem key={item.num} item={item} />;
  });
  return <ul className="todolist">{item}</ul>;
}

function Todo() {
  // 샘플 목록
  const initItemList = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  // 상태관리
  // 상태가 수정되면 화면이 리렌더링되는 리엑트
  const [itemList, setItemList] = React.useState(initItemList);
  let lastNum = itemList.length;

  // 할일 추가
  function addItem(title) {
    console.log("할일 추가");
    // 데이터 갱신, itemList에 item 추가
    // num, title, done 속성을 가진 item 객체 생성
    const item = { num: ++lastNum, title, done: false };
    setItemList([...itemList, item]);
  }

  // 완료/미완료 처리A
  function toggleDone(num) {
    console.log(num, "완료/미완료");
    // 데이터 갱신, itemList에서 num에 해당하는 item의 done 값을 수정
    const selectedItem = itemList.find((item) => item.num === num);

    console.log("선택된 li", selectedItem);
    // item의 done 값을 수정
    selectedItem.done = !selectedItem.done;

    // 화면 갱신, done 값에 따라서 <s> 추가 또는 삭제
  }

  // 할일 삭제
  function deleteItem(num) {
    console.log(num, "할일 삭제");
    /* 2안 */
    const index = itemList.findIndex((item) => item.num === num);

    if (index !== -1) {
      itemList.splice(index, 1);
    }
    // 데이터를 기반으로 화면 갱신
  }

  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <TodoInput addItem={addItem} />
            <TodoList itemList={itemList} />
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
