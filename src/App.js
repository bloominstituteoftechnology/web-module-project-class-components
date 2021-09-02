import React from 'react';
import TodoData from './components/TodoData';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: TodoData,
      
    }
  }

  handleTaskToggle = (id) => {
    console.log('from handletask')
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
      
        return task;
      })
    });
  };

  handleTaskAdd = (task) => {
    const todo = {
      task: task,
      id: Math.random(), 
      completed: false, 
    }
    const newTasks = [...this.state.tasks, todo]
    this.setState({
      tasks: newTasks,
    })
  }

  handleTasksCompleted = () => {
    const newTasks = this.state.tasks.filter(task => {
      console.log('from taskCompleted', task)
      return !task.completed
    })
    this.setState({
      tasks: newTasks,
    })
  }

  render() {
  console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleTaskAdd={this.handleTaskAdd} />
        <TodoList
        tasks={this.state.tasks}
        handleTaskToggle={this.handleTaskToggle}
        handleTasksCompleted={this.handleTasksCompleted}
        />
      </div>
    );
  }
}

export default App;
