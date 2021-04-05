import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles.scss';

const todoarr = [
  
]; //array to store data

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers 
  //you need to work with your state

  //fetch info from array 
  constructor()
  {
    super();
    this.state = {
      todoarr : todoarr
    }
  }

  //toggleItem
  toggleItem = (id)=>{
    const newTodo = this.state.todoarr.map(item =>
      {
        if (item.id === id)
        {
          return(
            {
              ...item,
              completed: !item.completed
            }
          );
        }
        else
        {
          return item
        }
      });
    this.setState(
      {
        todoarr:newTodo
      }
    );
  }

  //addItem
  addItem = (itemName)=>
  {
    const newItem = {
      name: itemName,
      id: this.state.todoarr.length,
      completed: false}
    this.setState(
      {
        todoarr: [...this.state.todoarr,newItem]
      }
    );
  }


  //clearCompleted
  clearCompleted = event =>
  {
    this.setState(
      {
        todoarr: this.state.todoarr.filter(item =>(!item.completed))
      }
    );
  }

  //app data
  //handler functions
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} todoarr={this.state.todoarr} />
      </div>
    );
  }
}

export default App;
