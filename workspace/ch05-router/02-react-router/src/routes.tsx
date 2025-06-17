import { createBrowserRouter, Navigate } from "react-router";
import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" /> }, // 루트페이지에 들어가도 home 으로 리다이렉트 시킴
  { path: "/home", element: <Home /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
]);

export default router;
