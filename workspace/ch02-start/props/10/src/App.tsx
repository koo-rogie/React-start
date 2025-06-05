import Counter from "@components/Counter";
import Header from "@components/Header";

function App() {
  console.log("app 함수 호출됨");
  return (
    <div id="app">
      <Header />
      <Counter />
    </div>
  );
}

export default App;
