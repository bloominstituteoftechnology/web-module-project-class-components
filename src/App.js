import React from 'react';
import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList'
import './Todo.css'

const tasks = [
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks:tasks
    }
  }

  toggleCompleted = (taskId) => {
    const updatedComplete = this.state.tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task;
    })
    this.setState(
      {
        ...this.state,
        tasks: updatedComplete
      }
    )
  }

  addTask = (taskName) => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      tasks: [
        ...this.state.tasks,
        newTask
      ]
    })

    console.log(newTask)
  }

  clearCompleted = () => {
    const clear = this.state.tasks.filter(task => {
      if(!task.completed) {
        return task;
      }

    }
    )
    this.setState(
      {
      ...this.state,
      tasks: clear
      }
    ) 
  }

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask = {this.addTask}/>
        </div>
        <ToDoList tasks = {this.state.tasks} toggleCompleted= {this.toggleCompleted} clearCompleted = {this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
