import React from 'react'; 
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

import './app.css';



const items = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 17475858,
      completed: false
    },
    {
      task: 'Clean Dishes',
      id: 12345,
      completed: false
    },
    {
      task: 'Walk the Dog',
      id: 1234,
      completed: false
    }
  ];


class App extends React.Component {
  constructor() {
    super();
    this.state  = {
      items: items
    }
  }
  handleAddItem=(task) =>{
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      items: [...this.state.items, newItem]
    })
  }

  handleToggleItem = (i) =>{
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === i.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }
  handleClear = ()=> {
    this.setState({
      ...this.state,
      items: this.state.items.filter(item=> !item.completed)
    });
  }
  render() {
    return (
      <div>
        <h2>Todo App!:</h2>
        <TodoList handleToggleItem={this.handleToggleItem}items = {this.state.items}/>

        <TodoForm handleAddItem= {this.handleAddItem}/>

        <button onClick={this.handleClear}>Clear Tasks</button>
      </div>
    );
  }
}

export default App;
