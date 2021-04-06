import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todoitems = [
  {
    name: 'Fix Garage',
    id: 12,
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
     super();
     this.state = {
       todoitems: todoitems
     }
    }

   toggleItem = (id) => {
     const newTodo = this.state.todoitems.map(item => {
       if (item.id === id) {
         return( {
           ...item,
           completed: !item.completed
         });
       } else {
         return item
       }
     });
   

    this.setState({
      todoitems: newTodo
    });
  }


  addItem = (itemName) => {
    this.setState({
      todoItems: [...this.state.todoitems, {
        name: itemName,
        id: Date.now(),
        completed: false
      }]
    });
  }

  clearCompleted = evt => {
    this.setState({
      todoitems: this.state.todoitems.filter(item => (!item.completed))
    })
  }


  render() {
    return (
      <div>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} todoitems={this.state.todoitems} />
      </div>
    );
  }
}

export default App;
