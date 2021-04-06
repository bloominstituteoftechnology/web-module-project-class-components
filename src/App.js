import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import React from 'react';
import "./components/Todo.css"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [
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
      ]
    };
  }

 toggleTask = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        console.log(id)
        return({
          ...task, 
          completed: !task.completed
        })
      } else {
        return(task)
      }
    })
    this.setState({...this.state, tasks: newTasks})
  }

  addTask = (name) => {
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    }

    const newTasks = [
      ...this.state.tasks, newTask
    ]

    this.setState({...this.state, tasks: newTasks})
  }

  clearTasks = () => {
    this.setState({tasks: []})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask}/>
        <TodoForm addTask={this.addTask} clearTasks={this.clearTasks}/> 
      </div>
    );
  }
}



export default App;
