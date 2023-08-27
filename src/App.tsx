import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      {/** ヘッダー */}
      <Header />
      {/** TODO 入力フォーム */}
      <TodoForm/>
       {/** TODOリスト一覧表示 */}
      <TodoList/>
    </div>
  );
}

export default App;
