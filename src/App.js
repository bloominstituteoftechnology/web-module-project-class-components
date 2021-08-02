import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const thingsToDo = [
  {
    task: 'Mow the lawn',
    id: 1528817077546,
    completed: false
  },
  {
    task: 'Feed the plants',
    id: 1528817078964,
    completed: false
  },
  {
    task: 'Fold the dishes',
    id: 1528817099846,
    completed: false
  },
]



class App extends React.Component {
  constructor(){
    super();
    this.state={
      thingsToDo: thingsToDo
    }
  }
  handleCompleted = (id) => {
    this.setState({
      thingsToDo: this.state.thingsToDo.map(item=> {
        if (item.id === id) {
          return({
            ...item, completed: !item.completed
          });
        }
        return item;
      })
    });
  }
  handleAddTodo=(name)=>{
    const newTodo={
      task: name,
      id: Date.now(),
      completed:false
    }
    this.setState({thingsToDo: [...this.state.thingsToDo, newTodo]});
  }
  handleClear = ()=>{
    this.setState({
      ...this.state,
      thingsToDo:this.state.thingsToDo.filter(item=>{
        return(item.completed === false);
      })
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your To-do App!</h2>
        <h1>To-Do List</h1>
        <TodoForm handleAddTodo={this.handleAddTodo}/>
        <TodoList handleClear={this.handleClear} handleCompleted={this.handleCompleted} thingsToDo={this.state.thingsToDo}/>
      </div>
    );
  }
}

export default App;
