import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const list = [
  {
    task: 'Laundary',
    id:22565 ,
    completed: false
  },
  
  {
    task: 'Dishes',
    id: 22566,
    completed: false
  }
];
  

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todo: list
    }
  }

toggleItem = (id) => {
  const newList = this.state.todo.map(item => {
    if(item.id === id){
      return {
        ...item,
        completed: !item.completed
      }
    }else{
      return(item)
    }
  });
  this.setState({
    todo: newList
  })
};

addItem = (title) => {
  const newItem = {
    task: title,
    id: this.state.todo.length,
    completed: false
  };
  console.log(newItem)
  this.setState({
    todo: [...this.state.todo, newItem]
  })
};

clearCompleted = (e) => {
  e.preventDefault();
  const newList = this.state.todo.filter(item => {
    return(item.completed === false)
  })
  this.setState({
    todo: newList
  })
};

render() {
  return (
    <div className="App">
      <div className="header">
        <h1>Todo List:</h1>
        <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} todo={this.state.todo}/>
      </div>
      <div className="list">
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
      </div>
    </div>
  );
}
}
export default App;
