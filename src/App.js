import React from 'react';
import './components/Todo.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoItems = [
  {
    id:0,
    name:"Make bed",
    completed: false
  },
  {
    id:1,
    name:"Stretch",
    completed: false
  },
  {
    id:2,
    name:"Meditate",
    completed: false
  },
  {
    id:3,
    name:"Brush teeth",
    completed: false
  },
  {
    id:4,
    name:"Make tea",
    completed: false
  },
  {
    id:5,
    name:"Study",
    completed: true
  },
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoItems: todoItems
    }
  }

  handleToggle = (id) => {
    console.log("handleToggle was fired in App.js");

    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.map(item => {
        if (item.id === id){
          return({
            ...item,
            completed: !item.completed
          })
        } else {
          return item;
        }
      })
    });
  }

  handleAdd = (name) => {
    const newItem = {
      id:Math.random(),
      name: name,
      completed: false
    }
    this.setState({
      ...this.state,
      todoItems: [...this.state.todoItems, newItem]
    })
  }

  handleClear = () => {
    console.log("handleClear fired in App.js")
    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.filter(item => {
        return(item.completed === false)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App</h1>
          <TodoForm handleAdd={this.handleAdd} />
        </div>
        <TodoList todoItems={this.state.todoItems} handleToggle={this.handleToggle} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
