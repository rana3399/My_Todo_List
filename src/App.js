import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <div className= "main-header-container">
      <h3 className = "app-main-header">My Todo app</h3>
      </div>
      <Todo />
    </div>
  );
}

export default App;
