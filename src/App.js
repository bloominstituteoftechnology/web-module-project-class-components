import React, {Component, useState} from 'react';

import ToDoList from './components/TodoList'

import ToDoForm from './components/TodoForm'

import './app.css'


const initialToDo = [
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

class App extends Component {


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state={
      todo: initialToDo
    }
  }

  toggleComplete =(id)=>{
    this.setState({
      ...this.state,
      todo: this.state.todo.map((task)=>{
        if(task.id === id){
          return({
            ...task,
            completed: !task.completed
          });
        } else{
          return(task)
        }
      })
    })
  }

  addTask =(task)=>{
    const newTask ={
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTask]
    })
  }

  clearTask =()=>{
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((task)=>{
        return(task.completed === false);
      })
    })
  }



  render() {
    return (
      <div className='container'>
        <h1>ToDo List: MVP</h1>
        
        <ToDoList 
          toggleComplete={this.toggleComplete} 
          task={this.state.todo}
          key={this.state.todo.key}
        />

        <ToDoForm 
          addTask={this.addTask} 
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
