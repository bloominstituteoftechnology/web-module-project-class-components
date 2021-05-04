import React, { useState } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from "./components/TodoList"


const todoItems = [
 {
   name: 'Do dishes',
   id: 123,
   completed: false
 },

 {
   name: 'Walk the dog',
   id: 124,
   completed: false
 },

 {
   name: 'Take shower',
   id: 125,
   completed: false
 },

]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    
    this.state = {
      taskList: todoItems
    }
  }

  addTodo = (newTodoName) => {
    const newTodo = {
      name: newTodoName,
      id: Date.now(),
      completed: false,
    }
    this.setState({taskList: [...this.state.taskList, newTodo]}) 
  }

  changeTodoStatus = (arg) => {
    const newList = this.state.taskList.map(element => {
      if (arg.id === element.id){
        return {
          // name: arg.name,
          // id: arg.id,
          // completed: !arg.completed

          ...element, completed: !element.completed
        }
      } else {
        return element
      }
    })
    console.log(newList)
    this.setState({taskList: newList})
  }
  
  clearComplete = (event) => {
    event.preventDefault()
    const newList = this.state.taskList.filter(element => element.completed === false)
    console.log(newList)
    this.setState({taskList: newList})
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo List!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todoItems={this.state.taskList} changeTodoStatus={this.changeTodoStatus}/>
        <button onClick={this.clearComplete}>Clear Completed</button>

      </div>
    );
  }
}

export default App;
