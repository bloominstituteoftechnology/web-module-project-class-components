import React from 'react'
import ToDo from './TodoList';
import ToDoList from './TodoList';
import Form from './Form';


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

  this.setState({
    ...this.state, 
    todos: [...this.state.todos, newtoDo]
  })
}

handleClear = () =>{
  this.setState({
    ...this.state,
    todos: this.state.todos.filter( todo => {return todo.completed === false})
  })
}

handletoggle = (clickedID) => {

this.setState({
  ...this.state,
  todos: this.state.todos.map(todo => {
    if (todo.id === clickedID){
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
        <ToDoList handletoggle={this.handletoggle} todos={todos} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>CLEAR</button>
      </div>
    )

  }
}
