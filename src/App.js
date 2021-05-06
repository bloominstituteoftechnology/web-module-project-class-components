import React from 'react';
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'


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
      taskList: taskList,
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = newTaskName =>{
    this.setState({
      taskList: [...this.state.taskList, {
        task: newTaskName,
        id: Date.now(),
        completed: false
      }]
    })
    console.log(this.state.taskList);
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList taskList={this.taskList}/>
        
      </div>
    );
  }
}

export default App;
