import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const tasks = [
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      tasks: tasks
    }
  }
  
  handleAddItem = (task) => {
    const item = {
      task: task,
      id: this.state.tasks.length,
      completed: false
    }
    const newTasks = [...this.state.tasks, item]
    this.setState({
      tasks: newTasks
    })
  }
  
handleItemToggle = (itemId) => {
  this.setState({
    tasks: this.state.tasks.map(item => {
      if (itemId === item.id){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
  })
}
  
  handleClearItems = () => {
    const newTasks = this.state.tasks.filter(item => {
      return !item.completed
    })
    this.setState({
      tasks:newTasks
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} />
        <TodoList handleClearItems={this.handleClearItems} handleItemToggle={this.handleItemToggle} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;

