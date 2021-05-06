import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const chores = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      chores: chores
    }
  }

  toggleItem = (id) => {
    const newChores = this.state.chores.map(item => {
      if (item.id === id) {
        return ({
          ...item,
          completed: !item.completed
        })
      } else {
          return item
        }
      })
    newChores.completed = !newChores.completed;
    this.setState({
      chores: newChores
    });
  }

  addItem = (itemName) => {
    this.setState({
      chores: [...this.state.chores, {
        name: itemName,
        id: this.state.chores.length,
        completed: false,
      }]
    })
  }

  clearCompleted = e => {
    this.setState({
      chores: this.state.chores.filter(item => {
        return(item.completed === false)
      })
    })
  }


  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>To-Do List</h1>
           <TodoForm addItem={this.addItem}/>
         </div>
        <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} chores={this.state.chores} />
       </div>
    );
  }
}

export default App;
