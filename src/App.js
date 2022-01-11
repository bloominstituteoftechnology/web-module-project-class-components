import React from 'react';
import ReactDom from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'


const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: todo
    };
  }

  handleAddTodo = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo]
    })
  }

  handleClearTodo = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(todo => {
        return !todo.completed;
      })
    });
  }

  handleToggleTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(todo => {
        if(todo.id === selectedTodo.id) {
          return({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo;
        }
      })
    });
  }

  render() {
    return (
    <div>
      <div>
        <h2>ToDo List: MVP</h2>
        <TodoList handleToggleTodo={this.handleToggleTodo} todo={this.state.todo} />
      </div>
      <TodoForm handleAddTodo={this.handleAddTodo} />
      <button onClick={this.handleClearTodo} className='clear-button'>Clear Completed</button>
    </div>
    );
  }
}

export default App;
