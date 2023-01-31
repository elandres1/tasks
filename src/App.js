import './App.css';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('task', task)
  }
  return (
    <div className="App">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text"
          placeholder='Enter a new task'
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Save task</button>
      </form>
    </div>
  );
}

export default App;
