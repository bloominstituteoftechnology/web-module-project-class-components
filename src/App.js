import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.scss';
const todos = [
  {
    name: 'seed task',
    id: 'hard coded 0',
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
    this.setState({
      ...this.state.todos, 
      todos: this.state.todos.map(i =>{
        if(i.id === id) {
          return({
            ...i,
            completed: !i.completed
            //could have written 
            // completed i.completed ? false : true
          })
        } else {
          return i
        }
      })
    })
  }

  addTodo = name => {
    // console.log('"App.js todo:', name);
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  clearCompleted = () =>{
    this.setState({
      ...this.setState, 
      todos: this.state.todos.filter(i => {
        return i.completed === false
      })
    })
  }

  render() {
    console.log('this.state.todos App.js', this.state.todos);
    return (
      <div className="App">
        <div className='Header'>
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>

        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/>

      </div>
    );
  }
}

export default App;
