import Reaction from "../reaction.js";

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

// 헤더 컴포넌트를 렌더링합니다.
function Header() {
  return Reaction.createElement(
    "header",
    null,
    Reaction.createElement("h1", null, "Todo List - 08 상태(데이터) 변경시 화면 리렌더링"),
    Reaction.createElement("p", null, "파일 경로: ", Reaction.createElement("span", { id: "filepath" }, `ch${location.href.split("/ch")[1]}index.html`))
  );
  /*
  <header>
    <h1>Todo List - 08 상태(데이터) 변경시 화면 리렌더링</h1>
    <p>파일 경로: <span id="filepath">ch${location.href.split("/ch")[1]}index.html</span></p>
  </header>
  */
}

// 푸터 컴포넌트를 렌더링합니다.
function Footer() {
  return Reaction.createElement("footer", null, Reaction.createElement("p", null, "멋쟁이 사자처럼 FrontEnd BootCamp"));

  /*
  <footer>
    <p>멋쟁이 사자처럼 FrontEnd BootCamp</p>
  </footer>
  */
}

/**
 * TodoItem 컴포넌트를 생성합니다.
 * @param {{ item: { num: number, title: string, done: boolean } }} param0 - 렌더링할 아이템 정보
 * @returns {HTMLElement} 리스트 아이템 요소
 */
function TodoItem({ item, toggleDone, deleteItem }) {
  return Reaction.createElement(
    "li",
    { "data-num": item.num },
    Reaction.createElement("span", null, item.num),
    Reaction.createElement("span", { onclick: () => toggleDone(item.num) }, item.done ? Reaction.createElement("s", null, item.title) : item.title),
    Reaction.createElement(
      "button",
      {
        type: "button",
        onclick: () => deleteItem(item.num),
      },
      "삭제"
    )
  );

  /*
  num="1", title="가나다" 일때
    <li data-num="1">
      <span>1</span>
      <span>가나다</span>
      <button type="button">삭제</button>
    </li>
  */
}

/**
 * TodoList 컴포넌트를 생성합니다.
 * @param {{ itemList: { num: number, title: string, done: boolean }[] }} param0 - 아이템 배열
 * @returns {HTMLElement} 리스트 요소
 */
function TodoList({ itemList, toggleDone, deleteItem }) {
  const items = itemList.map((item) => TodoItem({ item, toggleDone, deleteItem }));
  return Reaction.createElement("ul", { class: "todolist" }, items);
  /*
  <ul class="todolist">`${items}`</ul>
  */
}

/**
 * TodoInput 컴포넌트를 생성합니다.
 * @param {{ handleAddKeydown: function, handleAdd: function }} props - 입력 관련 이벤트 핸들러
 * @returns {HTMLElement} 입력 폼 요소
 */
function TodoInput(props) {
  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    console.log("추가 버튼 클릭");
    const inputElem = document.querySelector(".todoinput > input");
    if (inputElem.value.trim() !== "") {
      props.addItem(inputElem.value.trim());
      inputElem.value = "";
      inputElem.focus();
    }
  };

  /**
   * 엔터 키 입력 시 추가 동작을 실행합니다.
   * @param {KeyboardEvent} event - 키보드 이벤트 객체
   */
  const handleAddKeydown = (event) => {
    console.log("keydown", event);
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return Reaction.createElement(
    "div",
    { class: "todoinput" },
    Reaction.createElement("input", {
      type: "text",
      autofocus: true,
      onkeydown: (e) => {
        handleAddKeydown(e);
      },
    }),
    Reaction.createElement("button", { type: "button", onclick: handleAdd }, "추가")
  );

  /*
  <div class="todoinput">
    <input type="text" autofocus="true">
    <button type="button">추가</button>
  </div>
  
  */
}

/**
 * Todo 섹션을 렌더링합니다.
 * @param {{ handleAdd: function, handleAddKeydown: function, itemList: object[] }} props - Todo 컴포넌트에 필요한 props
 * @returns {HTMLElement} Todo 섹션 요소
 */
function Todo(props) {
  return Reaction.createElement(
    "div",
    { id: "main" },
    Reaction.createElement(
      "div",
      { id: "container" },
      Reaction.createElement("ul", null, Reaction.createElement("li", null, Reaction.createElement("h2", null, "할일 목록"), TodoInput(props), TodoList(props)))
    )
  );
  /*
  <div id="main">
    <div id="container">
      ${TodoInput}
      ${TodoList}
    </div>
  </div>
  */
}

// App 컴포넌트
function App() {
  // 샘플 목록
  const inititemList = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  const [itemList, setItemList] = Reaction.useState(inititemList);

  let lastNum = itemList.length;

  /**
   * 새로운 아이템을 추가합니다.
   * @param {string} title - 추가할 할일 제목
   */
  function addItem(title) {
    console.log("할일 추가");
    /* 1안
    const newItemList = [...itemList];
    // 데이터 갱신, itemList에 item 추가
    // num, title, done 속성을 가진 item 객체 생성
    
    newItemList.push(item);
    
    setItemList(newItemList);
    */
    const item = {
      num: itemList[itemList.length - 1].num + 1,
      title,
      done: false,
    };
    setItemList([...itemList, item]); // 기존의 배열 스프래드 하기
    // 기존에 있었던 것과 새로운 객체를 배열로 만들기
  }

  /**
   * 할일 항목의 완료 상태를 토글합니다.
   * @param {number} num - 토글할 아이템 번호
   */
  function toggleDone(num) {
    console.log(num, "완료/미완료");
    // 데이터 갱신, itemList에서 num에 해당하는 item의 done 값을 수정
    // itemList에서 num 값으로 item 조회
    /* 1안 
    let selectedItem;
    itemList.forEach((item) => {
    if (item.num === num) {
      selectedItem = item;
    }
    });
    */

    /* 2안
    const selectedItem = itemList.find((item) => item.num === num);
    
    console.log("선택된 li", selectedItem);
    // item의 done 값을 수정
    selectedItem.done = !selectedItem.done;
    */

    /* 3안 */
    const newItemList = itemList.map((item) => {
      return item.num === num ? { ...item, done: !item.done } : item;
    });
    setItemList(newItemList);
  }

  /**
   * 할일 항목을 삭제합니다.
   * @param {number} num - 삭제할 아이템 번호
   */
  function deleteItem(num) {
    console.log(num, "할일 삭제");
    /* 1안
    // 데이터 갱신, itemList에서 num에 해당하는 item 삭제
    const targetLi = document.querySelector(`.todolist > li[data-num="${num}"]`);
    
    화면 갱신, 화면에서 num에 해당하는 item 제거
    if (targetLi) {
        targetLi.remove();
      }
    */

    /* 2안
    const index = itemList.findIndex((item) => item.num === num);
    
    if (index !== -1) {
      itemList.splice(index, 1);
    }
    */

    /*3안*/
    const newItemList = itemList.filter((item) => item.num !== num);
    setItemList(newItemList);
  }

  return Reaction.createElement("div", { id: "todo" }, Header, Todo({ itemList, addItem, toggleDone, deleteItem }), Footer);
  /*
  <div id="todo">
    ${Header}
    ${Todo}  
    ${Footer}
  </div>
  */
}

Reaction.createRoot(document.querySelector("#root")).render(App);
