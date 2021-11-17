import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import Home from './Home';

import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo/>}  />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
