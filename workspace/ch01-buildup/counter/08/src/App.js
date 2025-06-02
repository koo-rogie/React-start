import Reaction from "./reaction.js";
import Header from "./components/Header.js";
import Counter from "./components/Counter.js";

function App() {
  console.log("app 함수 호출됨");
  return Reaction.createElement("div", { id: "app" }, Header, Counter);
}

export default App;
