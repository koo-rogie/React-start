import Reaction from "./reaction.js";
import Todo from "./pages/Todo.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

// App 컴포넌트
function App() {
  // 샘플 목록
  const inititemList = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  const [itemList, setItemList] = Reaction.useState(inititemList);

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
      num: itemList[itemList.length - 1]?.num + 1 || 1,
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

export default App;
