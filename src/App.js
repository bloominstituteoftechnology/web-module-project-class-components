import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: []
    }
  }

  handleAddTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todo: [
        ...this.state.todo,
        newTask
      ]
    })
  }

  handleClearComplete = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(task => task.completed === false)
    })
  }

  handleComplete = (id) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(task => {
        if (task.id === id){
          return {
            ...task,
            completed: !task.completed
          }
        }else{
          return task
        }
      })
    })
  }

  handleSave = () => {
    window.localStorage.setItem('todo', JSON.stringify(this.state.todo))
  }

  handleLoad = () => {
    this.setState({
      ...this.state,
      todo: JSON.parse(window.localStorage.getItem('todo'))
    })
  }

  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} handleComplete={this.handleComplete} />
        <TodoForm handleAddTask={this.handleAddTask} handleClearComplete={this.handleClearComplete} />
        <div className='save'>
          <button onClick={this.handleSave}>Save</button>
          <button onClick={this.handleLoad}>Load</button>
        </div>
      </div>
    );
  }
}

export default App;
