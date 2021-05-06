import React from 'react';
import TodoForm from './components/TodoForm.js'


const taskList = [
  {
    task: '',
    id: '',
    completed: false,
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state ={
      task: taskList,
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = newTaskName =>{
    this.setState({
      task: [...this.state.task, {
        task: newTaskName,
        id: Date.now(),
        completed: false
      }]
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        
      </div>
    );
  }
}

export default App;
