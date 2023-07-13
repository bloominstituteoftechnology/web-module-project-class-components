import React from 'react'
import TodoList from './TodoList';
import TodoForm from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
      {
        name: 'Organize Garage',
        id: 1528817077286, // could look different, you could use a timestamp to generate it
        completed: false
      },
      {
        name: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      },
      {
        name: 'Workout',
        id: 1528817084351,
        completed: true
      },
    ]
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter(element => {
        return (element.completed === false);
      })
    });
  }

  handleAdd = (value) => {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, {
        name: value,
              id: (Math.random() * (1 - 1528817084351) + 1),
              completed: false
            }]
    })
  }

  handleToggle = (clickedID) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(element => {
        if (element.id === clickedID) {
          return ({
            ...element,
            completed: !element.completed
          })
        }
        return element;
      })
    })
  }


  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        <TodoList todos={todos} handleToggle={this.handleToggle}></TodoList>
        <TodoForm handleAdd={this.handleAdd}></TodoForm>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
