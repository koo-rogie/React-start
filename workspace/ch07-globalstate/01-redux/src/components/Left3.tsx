import type { RootState } from "@/RTK/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Left3() {
  useEffect(() => {
    console.log("#### Left3 렌더링.");
  });

  // Redux store에서 count값 가져오기
  const Rcount = useSelector((state: { count: number }) => state.count);

  // Redux 툴킷
  const Kcount = useSelector((state: RootState) => state.counterStore.count);

  return (
    <div>
      <h3>Left3</h3>
      <>
        {/* 리덕스를 사용할 경우 */}
        <span>{Rcount}</span>
      </>
      <>
        {/* 리덕스를 사용할 경우 */}
        <span>{Kcount}</span>
      </>
    </div>
  );
}

export default Left3;
