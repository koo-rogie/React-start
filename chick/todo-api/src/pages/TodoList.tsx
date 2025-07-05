import { useEffect, useState } from "react";
import useAxiosInstance from "../hooks/useAxiosInstance";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}

function TodoList({ deleteItem, toggleDone }: TodoListPropType) {
  const axiosInstance = useAxiosInstance();

  const [itemList, setItemList] = useState<TodoItemType[]>([]);

  const fetchList = async () => {
    /** Promise 상태
     * pending: 진행중
     * fulfilled: 성공
     * rejected : 실패
     */

    try {
      // 성공했을때 (fulfilled 상태)
      const res = await axiosInstance.get("/todolist"); // fulfilled 상태
      console.log("서버의 전체 응답", res.data);
      console.log("서버의 data 속성만 응답", res.data);
      console.log("서버의 data.items 속성만 응답", res.data.items);

      setItemList(res.data.items);
    } catch (err) {
      // 응답에 실패했을때 (rejected
      console.error(err);
    }
  };

  // 최초에만 서버에서만 받아올 수 있도록!
  useEffect(() => {
    fetchList();
  }, []);

  const liList = itemList.map((item) => {
    return <TodoItem key={item._id} item={item} fetchList={fetchList} />;
  });

  return (
    <ul className="todolist">
      <>{liList}</>
    </ul>
  );
}

export default TodoList;
