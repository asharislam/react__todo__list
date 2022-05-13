import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import TodoCheck from './components/TodoCheck';
import TodoDisable from './components/DisableButton';

function App() {
  return (
    <div className="App">
      <Todos/>
      <TodoDisable/>
      <TodoCheck />
      
    </div>
  );
}

export default App;
