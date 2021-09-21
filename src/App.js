import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(100);
  const handleClick = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  };
  const fullCharge = () => {
    setCount(100)
  };
  return (
    <div className="counter-main">
      <h1>Battery Remaining: {count}</h1>
      <button onClick={handleClick} className="counter-btn">Use Battery</button>
      <button onClick={fullCharge} className="counter-btn">Full Charge</button>
    </div>
  )
}

export default App;
