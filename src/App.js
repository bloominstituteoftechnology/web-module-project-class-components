import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handleAddTask = (task) => {
    const item = {
      task: task,
      id: Math.floor(Date.now()),
      completed: false
    }

    const newItemArr = [...this.state.todos, item]
    this.setState({todos: newItemArr})

  }

  handleTaskToggle = (taskId) => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task
      })
    })
  }


  handleCompeltedTasks = () => {
    const newTodoArr = this.state.todos.filter(todo => {
      return !todo.completed
    })
    console.log(newTodoArr)
    this.setState({todos: newTodoArr})
  }
  render() {
    return (
      <div>
        <div className='header'>
          <h2>To Do list:</h2>
          <TodoForm handleCompletedTasks={this.handleCompeltedTasks} handleAddTask={this.handleAddTask}/>
        </div>
        <TodoList todos={this.state.todos} handleTaskToggle={ this.handleTaskToggle}/>
        
      </div>
    );
  }
}

export default App;
