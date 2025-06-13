import Footer from '@components/Footer';
import Header from '@components/Header';
// import Todo from '@pages/Todo';
import TodoContaier from '@pages/TodoContainer';

function App(){
  console.log('App 렌더링');
  return (
    <div id="todo">
      <Header />
      <TodoContaier />
      <Footer />
    </div>
  );
}

export default App
