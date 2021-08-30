import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const task =
[
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
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: task
    }
  }

  handleTodoToggle = (todoId) => {
    this.setState({
      task: this.state.task.map(item=> {
        if(item.id === todoId){
          return{
            ...item,
            completed: (item.completed ? false: true)
          }
        }
        return(item)
      })
    })
  }

  handleTodoAdd = (taskName) => {
    const task = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    const newTasks = [...this.state.task, task];
    this.setState({
      task: newTasks
    })
  } 

    handleTodoCompleted = () => {
      const newTask = this.state.task.filter(item=>{
        return(!item.completed)
      })

      this.setState({
        task: newTask
      })
  }

  render() {
    return (
      <div>
      <h1>Todo List</h1>
      <TodoList 
      task={this.state.task}
      handleTodoToggle={this.handleTodoToggle}
      handleTodoCompleted={this.handleTodoCompleted}
      handleTodoAdd={this.handleTodoAdd} />
      <TodoForm handleTodoAdd={this.handleTodoAdd}/>
      </div>
    );
  }
}

export default App;
