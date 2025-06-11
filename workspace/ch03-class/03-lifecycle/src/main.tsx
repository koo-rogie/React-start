// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
  // 해당 파일의 경우 콘솔에 2번 나와서 잠깐 주석처리함
);
