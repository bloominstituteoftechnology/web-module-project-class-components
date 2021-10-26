import React from 'react';
import ReactDOM from 'react-dom';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList'
import './components/Todo.css'

const todoItems = [
  {
    todo: 'eat',
    id: 0,
    completed: false
  },
  {
    todo: 'sleep',
    id: 1,
    completed: false
  },
  {
    todo: 'work',
    id: 2,
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
    toDos: toDos
    }
  }
handleClear = ()=> {
    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.filter(item=> !item.completed)
    });
  }
handleAddItem = (todo)=> {
  const newTodo ={
    todo: todo,
    id: Date.now(),
    complete:false
    };
  this.setState({
    ...this.state,
    complete: [...this.state.toDos, newTodo]
   })
  }
handleToggleItem = (todo)=>{
  this.setState({
    ...this.state,
    todoItems: this.state.todoItems.map(toDoID =>{
      if(toDoID.id === todo.id) {
        return {
          ...toDoID,
          completed: !toDoID.completed
          }
        }
      return toDoID;
      })
    });

  }
render() {
  return (
    <div>
      <h2>To Do's List</h2>
      <ToDoForm handleAddItem={this.handleAddItem}/>
      <ToDoList handleToggleItem={this.handleToggleItem} todoItems={this.state.todoItems}/> 
    </div>
    )
  }
}


