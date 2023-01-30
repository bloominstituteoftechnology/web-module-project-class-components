import React from 'react'
import TodoList from './TodoList';
import TodoForm from './Form';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Walk the dog',
          id: 1234567,
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 9876543,
          completed: false
        },
      ]
    }
  }

  handleAdd = () => {
    //1. set state
    //2. change todos
    //3. make a copy of todos
    //4. add a new todo to the end of our todo list

    const newTodo = {
      task: 'Cook',
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    //1. setState
    //2. loop through all todos
    //3. remove all todos that have completed === true
    //4. save filtered todos to state

    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });    
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={todos}/>
        <TodoForm handleAdd = {this.handleAdd}/>

        <button onClick = {this.handleClear}>Clear</button>
      </div>
    )
  }
}
