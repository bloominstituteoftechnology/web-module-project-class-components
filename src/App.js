import React from 'react';
import './components/Todo.css';
import TodoList from './components/TodoList';

function App() {
  return (
      <div className='todo-app'>
        <TodoList />
      </div>
  );
}

export default App;