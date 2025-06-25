import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";

// 리덕스용 스토어
// import store from "@/redux/store.ts"; 

// 리덕스 툴킷 스토어
import store from "@/RTK/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
