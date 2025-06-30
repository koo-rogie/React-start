import { RouterProvider } from "react-router";
// import router from "./router";
import "./App.css";
import router from "./router-lazy.tsx";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
