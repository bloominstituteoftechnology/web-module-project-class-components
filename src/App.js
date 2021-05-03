import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './styles.scss'

const toDoList = [
  {
    task: 'Learn to Code',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Style my App',
    id: (Date.now() + 1),
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList:toDoList
    }
  }

  toggleItem = (id) => {
    //console.log(id);
    const newToDo = this.state.toDoList.map(item => {
      if(item.id === id) {
        return {
          ...item, completed: !item.completed
        }
      }else {
        return (item);
      }
    })
    this.setState({
      toDoList: newToDo
    })
  }

  addItem = (title) => {
    const newItem = {
      task:title,
      id:Date.now(),
      completed:false,
    }
    const newToDo = [...this.state.toDoList, newItem]
    this.setState({
      toDoList: newToDo
    })
  }

  clearPurchased = () => {
    const newToDo = this.state.toDoList.filter(item => {
      return(item.completed === false);
    });

    this.setState({
      toDoList: newToDo
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Todo List</h1>
           <TodoForm addItem={this.addItem} toDoList={toDoList}/>
        </div>
        <TodoList clearPurchased={this.clearPurchased} toggleItem={this.toggleItem} toDoList={this.state.toDoList} />
      </div>
    );
  }
}

export default App;
