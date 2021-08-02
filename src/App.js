import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: [],
      searchValue: '',
      display: []
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
      ],
      display: [
        ...this.state.display,
        newTask
      ]
    })
  }

  handleClearComplete = () => {
    const filtered = this.state.todo.filter(task => task.completed === false)

    this.setState({
      ...this.state,
      todo: filtered,
      display: filtered
    })
  }

  handleComplete = (id) => {
    const changed = this.state.todo.map(task => {
      if (task.id === id){
        return {
          ...task,
          completed: !task.completed
        }
      }else{
        return task
      }
    })
    this.setState({
      ...this.state,
      todo: changed,
      display: changed
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

  handleSearch = (value) => {
    if (value === ''){
        this.setState({
            ...this.state,
            display: this.state.todo
        })
    }else{
        this.setState({
            ...this.state,
            display: this.state.todo.filter(item => item.task.includes(value))
        })
    }
}

handleChange = (value) => {
    this.setState({
        ...this.state,
        searchValue: value
    })
}

  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList display={this.state.display} handleComplete={this.handleComplete} handleSearch={this.handleSearch} handleChange={this.handleChange} searchValue={this.state.searchValue} />
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
