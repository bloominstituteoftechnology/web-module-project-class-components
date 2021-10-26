import React from 'react';
import TodoForm from './components/TodoForm'
import Todolist from './components/TodoList'


const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todos
    }
  }
  handleAddItem = (task) => {
    console.log('handle', task)
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newItem]
    });
  }

  handleClear = ()=> {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item=> !item.completed)
    });
  }

  handleToggleItem = (itemId) => {
       this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === itemId) {
          return {
            ...todo,
            completed: !todo.completed 
          }
        }
        return todo;
      })
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} handleClear={this.handleClear}/>
        <Todolist todos={this.state.todos} handleToggleItem={this.handleToggleItem}/>
      </div>
    );
  }
}

export default App;
