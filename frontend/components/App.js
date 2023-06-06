/* eslint-disable no-unused-vars */
import React from 'react'
import ToDo from './Todo';
import ToDoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'organize garage', 
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          comnpleted: false 
        }
      ]
    }
  }
  handleAdd = (name) => {
    const newtoDo = {
      name: name,
      id: Date.now(),
      completed: false 
    }
    TouchList.setState({ 
      ...this.state, 
      todo: [...this.state.todos, newtoDo]
    })
  }
  handleClear = () => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter( todo => {return todo.completed ===  false})
    })
  }
  handleToggle = (clickedID) => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedID) {
          return {
            ...todo,
            completed: !todo.completed 
          }
        }
        return todo
      })
    })
  }
  render() {
    const { todos } = this.state;
    console.log(todos) 
    return (
      <div>
        <h1>TODOS</h1>
        <ToDoList handleToggle ={this.handleToggle} todos ={todos} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>CLEAR</button>
      </div>
    )
  }
}
