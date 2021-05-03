import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Clean Room',
    id: 1528817084359,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: todoData,
    }
  }

  addItem = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    };
    
    this.setState({
       todoData: [...this.state.todoData, newItem]
    })
  }  

  toggleItem = (id) => {
    const newList = this.state.todoData.map(item => {
      if (item.id === id) {
        return ({
          ...item, completed: !item.completed
        })
      } else {
        return(item);
      }
    })
    this.setState({
      todoData: newList 
    })
  }

  clearCompleted = () => {
    const newList = this.state.todoData.filter(item => {
      return(item.completed === false)
    })

    this.setState({
      todoData: newList
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='Container'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
