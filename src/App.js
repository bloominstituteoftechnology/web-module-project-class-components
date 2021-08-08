import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import './components/Todo.css'

const tasks = [
  {
    todo: 'workout',
    id: 123,
    completed: false
  },
  {
    todo: 'debug',
    id: 124,
    completed: false
  },
  {
    todo: 'prepare dinner',
    id: 1235,
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
      tasks:tasks
    };
  }
   
  toggleCompletedTask = (taskId) => {
      console.log('task completed:', taskId)
      const updatedTaskList = this.state.tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        else {
          return task;
        }
      })
      console.log('updated tasks:', updatedTaskList);
      this.setState({
        ...this.state,
        tasks: updatedTaskList
      })
    }

    addTask = (newTask) => {
      console.log('adding new task:', newTask);
      this.setState({
        ...this.state,
        tasks: [
          ...this.state.tasks,
          {
            todo: newTask,
            id: Date.now(),
            completed: false
          }
         ]
      })
    }

    clearCompleted = () => {
      console.log('clearing completed tasks')
      this.setState({
        ...this.state,
        tasks: this.state.tasks.filter(task => !task.completed)
      })
    }

  
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Todo App:</h2>
        </div>
        <TodoList 
          tasks={this.state.tasks}
          toggleCompletedTask={this.toggleCompletedTask}
        />
        <TodoForm 
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
