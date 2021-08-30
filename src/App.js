import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const tasks = [
  {
    task: "",
    id: "",
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      tasks: tasks
    }
    console.log(tasks)
  }

  addTask = name => {
    const newTask = {
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    });
  }

  clearCompleted = () => {
    this.setState({
      ...this.setState,
      tasks: this.state.tasks.filter(todo => {
        return todo.completed === false
      })
    })
  }

  toggleTask = id => {
    console.log("App:", id);
    this.setState({
      ...this.state.todoList,
      tasks: this.state.tasks.map(todo =>{
        if (todo.id === id){
          return({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div className='Header'>
        <h1>Tasks:</h1>
        </div>
        <div>
          <TodoForm addTask={this.addTask} />
        </div>
        <div>
          <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;
