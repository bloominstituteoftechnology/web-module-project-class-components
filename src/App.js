import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const todos = [
  {
    todo: 'task',
    id: 0,
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleTodo = id => {
    console.log('id of todo in app.js', id);
  }

  addTodo = newestTodo =>{
    console.log('"App.js todo:', newestTodo);
    const newTodo = {
      todo: newestTodo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state, 
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
        <div>
        <h2>Todo List</h2>
        <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
