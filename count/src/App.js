import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
<div>
  <h1>Number Count</h1>
  <h2 className='count'>{count}</h2>
  <div>
    <button className='btn' onClick={ () => (setCount(count + 1))}>increment</button>
    <button className='btn' onClick={() => (setCount(count - 1))}>dicrement</button>
    <button className='btn' onClick={() => (setCount(0))}>reset</button>
  </div>
</div>
    </div>
  );
}

export default App;
