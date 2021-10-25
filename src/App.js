import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';


const listItems = [
  {
    name: 'Bananas',
    id: 123,
    completed: false
  },
  {
    name: 'Torillas',
    id: 124,
    completed: false
  },
  {
    name: 'Milk',
    id: 1235,
    completed: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    completed: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    completed: false
  },
  {
    name: 'Granola',
    id: 1248,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state ={
      listItems: listItems
    }
  }


  handleClear = ()=> {
    this.setState({
      ...this.state,
      listItems: this.state.listItems.filter(item=> !item.completed
        )
    });
  }
  
  handleAddItem = (name) => {
    const newItem = {
      name: name,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      listItems: [...this.state.listItems, newItem]
    });
  }

  handleToggleItem = (item) => {

    this.setState({
      ...this.state,
      listItems: this.state.listItems.map(items => {
        if (items.id === item.id) {
          return {
            ...items,
            completed: !items.completed
          }
        }
        return items;
      })
    });
  }
  



  render() {
    return (
<div className="App"> 
        <h2>Welcome to your Todo App!</h2>
        <div className="header">
           <h1>To Do List</h1>
           <TodoForm handleAddItem={this.handleAddItem}/>
         </div>
        <ToDoList handleToggleItem={this.handleToggleItem} listItems={this.state.listItems} />
        <button onClick={this.handleClear} className="clear-btn">Clear Completed</button>
       
      </div>
    );
  }
}

export default App;
