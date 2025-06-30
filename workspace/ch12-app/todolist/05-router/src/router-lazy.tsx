import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const TodoList = lazy(() => import("@pages/TodoList"));
const TodoInfo = lazy(() => import("@pages/TodoInfo"));
const TodoEdit = lazy(() => import("@pages/TodoEdit"));
const TodoAdd = lazy(() => import("@pages/TodoAdd"));
const Layout = lazy(() => import("@components/Layout"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // 사용자가 개발자가 원하지 않는 주소로 들어갔을경우 보여지는 사이트
    children: [
      // 루트 페이지로 들어왔을때 자식 컨포넌트로 아래 path로 지정한 컨포넌트가 나오게함,
      // 왜 이렇게 했냐면 Hader와 footer는 여러 페이지로 다 쓰임, 그걸 중복 사용을 막으려고 이렇게 함
      // Layout 컨포넌트 들어가면 알 수 있음.
      { index: true, element: <Home /> },
      // 루트페이지를 들어갔을때 자동으로 들어가지도록 함 리다이렉트
      { path: "home", element: <Navigate to="" /> },
      { path: "about", element: <About /> },
      { path: "list", element: <TodoList /> },
      {
        path: "list/:_id", // id값이 어떻게 올지 모르니 :_id라는 속성으로 분리함, 그래서 이 값은 뭐든 올 수 있다
        element: <TodoInfo />,
        children: [{ path: "edit", element: <TodoEdit /> }],
      },
      { path: "add", element: <TodoAdd /> },
    ],
  },
]);

// path에 :_id는 동적세그먼트이다(https://github.com/FEBC-13/React/tree/main/workspace-ins/ch05-router#51-%EB%8F%99%EC%A0%81-%EC%84%B8%EA%B7%B8%EB%A8%BC%ED%8A%B8)

export default router;
