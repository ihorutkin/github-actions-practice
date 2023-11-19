import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const increment = ()  => {
    setCount(prev => prev + 1)
  }

  const decrement = ()  => {
    setCount(prev => prev - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
