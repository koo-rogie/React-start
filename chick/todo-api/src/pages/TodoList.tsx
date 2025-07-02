import { useEffect, useState } from "react";
import useAxiosInstance from "../hooks/useAxiosInstance";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  itemList: TodoItemType[];
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}

function TodoList({ itemList, deleteItem, toggleDone }: TodoListPropType) {
  const axiosInstance = useAxiosInstance();
  // const [itemList, setItemList] = useState();

  // 서버로부터 목록 수신
  // const fetchList = () => {
  //   const res = axiosInstance
  //     .get('/todolist')
  //     .then(() => {}) //fulfilled;
  //     .catch(() => {}); //rejected
  //   console.log(`서버의 응답`, res);

  //   // res는 Promise 객체로 반환
  //   // 1. pending 작업 진행 중 → 로딩 스피너나 스켈레톤 UI 표시
  //   // 2. fulfilled 작업성공
  //   // 3. rejected 작업실패
  // };

  const fetchList = async () => {
    /** Promise 상태
     * pending: 진행중
     * fulfilled: 성공
     * rejected : 실패
     */

    try {
      // 성공했을때 (fulfilled 상태)
      const res = await axiosInstance.get("/todolist");
      console.log("서버의 전체 응답", res.data);
      console.log("서버의 data 속성만 응답", res.data);
      console.log("서버의 data.items 속성만 응답", res.data.items);
    } catch (err) {
      // 응답에 실패했을때 (rejected
      console.error(err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const liList = itemList.map((item) => {
    return <TodoItem key={item._id} item={item} deleteItem={deleteItem} toggleDone={toggleDone} />;
  });

  return <ul className="todolist">{liList}</ul>;
}

export default TodoList;
