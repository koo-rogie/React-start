// 샘플 목록
const itemList = [
  { num: 1, title: "자바스크립트 공부", done: true },
  { num: 2, title: "JS 프로젝트", done: true },
  { num: 3, title: "React 공부", done: false },
];

let lastNum = itemList.length;

// ul 요소 꺼내기
const itemListElem = document.querySelector(".todolist");

// 기존 목록 삭제
while (itemListElem.firstChild) {
  // 첫번째 자식이 없을때까지 무한루프됨
  // ! 파일 다 만들고 저장하기
  itemListElem.firstChild.remove();
}

// itemList 배열의 각 Todo 아이템을 화면에 추가
itemList.forEach((item, index) => {
  const liElem = getTodoItemElem(item);
  itemListElem.appendChild(liElem);
});

// 한건의 Todo 객체를 받아서 DOM 객체로 만들어 반환
function getTodoItemElem(item) {
  /* 엘리먼트 노드 생성 */
  const liElem = document.createElement("li");
  const numSpan = document.createElement("span");
  const titleSpan = document.createElement("span");
  const deletbtn = document.createElement("button");

  /* 텍스트 노드 생성 */
  const numTxt = document.createTextNode(item.num);
  const titletxt = document.createTextNode(item.title);
  const deletTxt = document.createTextNode("삭제");

  /* 엘리먼트 노드에 텍스트 노드 추가 */
  numSpan.appendChild(numTxt);

  if (item.done === true) {
    const sElem = document.createElement("s");
    titleSpan.appendChild(sElem);
    sElem.appendChild(titletxt);
  } else {
    titleSpan.appendChild(titletxt);
  }

  deletbtn.appendChild(deletTxt);
  liElem.dataset.num = item.num;
  titleSpan.setAttribute("onclick", `toggleDone(${item.num})`);
  deletbtn.setAttribute("type", "button");
  deletbtn.setAttribute("onclick", `deleteItem(${item.num})`);

  /* 엘리먼트 노드 조립 */
  liElem.appendChild(numSpan);
  liElem.appendChild(titleSpan);
  liElem.appendChild(deletbtn);

  // li 노드 반환
  return liElem;
}

// 할일 추가
function addItem(title) {
  console.log("할일 추가");
  // 데이터 갱신, itemList에 item 추가
  // num, title, done 속성을 가진 item 객체 생성
  const item = {
    num: ++lastNum,
    title,
    done: false,
  };

  itemList.push(item);

  // 화면 갱신, item을 DOM 객체로 만들어 ul 요소에 자식으로 추가
  const newItemElem = getTodoItemElem(item);
  itemListElem.appendChild(newItemElem);
}

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

// 완료/미완료 처리
function toggleDone(num) {
  console.log(num, "완료/미완료");
  // 데이터 갱신, itemList에서 num에 해당하는 item의 done 값을 수정
  // itemList에서 num 값으로 item 조회

  // item의 done 값을 수정

  // 화면 갱신, done 값에 따라서 <s> 추가 또는 삭제
}

// 할일 삭제
function deleteItem(num) {
  console.log(num, "할일 삭제");
  // 데이터 갱신, itemList에서 num에 해당하는 item 삭제

  // 화면 갱신, 화면에서 num에 해당하는 item 제거
}
