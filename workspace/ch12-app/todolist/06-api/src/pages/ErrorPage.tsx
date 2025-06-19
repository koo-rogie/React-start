import { isRouteErrorResponse, Link, useRouteError } from "react-router";

function ErrorPage() {
  const err = useRouteError();
  console.log("에러발생", err);
  let message = "예상하지 못한 에러가 발생했습니다.";
  if (isRouteErrorResponse(err)) {
    if (err.status === 404) {
      message = "존재하지 않는 페이지입니다.";
    }
  }
  return (
    <div id="main">
      <div className="todo error-pages">
        <h2>에러 발생</h2>
        <p>{message}</p>
        <span>홈 화면으로 돌아가주세요</span>
        <Link to="/">메인페이지로 돌아가기</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
