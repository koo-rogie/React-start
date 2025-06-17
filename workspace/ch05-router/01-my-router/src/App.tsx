import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import { useEffect, useState } from "react";

function App() {
  // 현제 url을 상태로 관리
  const [currentPath, setCurrentPath] = useState(location.pathname);

  // 컨포넌트가 마운트되면 이벤트 헨들러를 등록
  useEffect(() => {
    //URL이 변경되면 컴포넌트를 교체한다
    const handleLocatonChange = () => {
      console.log(`${location.pathname}으로 주소 변경 ${new Date()}`);

      // APP가 리렌더링 되어야한다
      setCurrentPath(location.pathname);
    };

    // popstate 이밴트가 발생하면  hanleLocatonChange호출
    window.addEventListener("popstate", handleLocatonChange);

    // 컨포넌트가 언마운트되면 이벤트 헨들러를 제거
    return () => {
      window.removeEventListener("popstate", handleLocatonChange);
    };
  }, []); // 빈 배열을 전달헤서 마운트 언마운트 될때 호출

  // url에 맞는 컴포넌트를 반환
  const renderComponent = () => {
    switch (currentPath) {
      case "/":
      case "/home":
        return <Home />;
      case "/page1":
        return <Page1 />;
      case "/page2":
        return <Page2 />;
      default:
        return <p style={{ color: "red" }}>404 not found</p>;
    }
  };
  return <>{renderComponent()}</>;
}

export default App;
