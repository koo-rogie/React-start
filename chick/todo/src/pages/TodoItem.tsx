import { useState } from "react";

interface itemListItem {
  _id: number;
  title: string;
  done: boolean;
}

interface Props {
  item: itemListItem;
}
export default function TodoItem({ item }: Props) {
  const [data, setData] = useState(false);

  const onClicks = () => {
    setData(!data);
    console.log("클릭됨");
  };

  return (
    <li className={`${item._id}`}>
      <span>{item._id}</span>
      <span onClick={onClicks}>{data ? <s>{item.title}</s> : item.title}</span>
      <button type="button">삭제</button>
    </li>
  );
}
