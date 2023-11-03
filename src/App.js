import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function descrese() {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>increas</button>
      <button onClick={descrese}>decreses</button>
    </div>
  );
}

export default App;
