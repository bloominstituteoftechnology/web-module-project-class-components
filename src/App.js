import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./components/Todo.css"

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos,
      count: 0,
    };
  };

  clearCompleted = () => {
    console.log("clearing completed todo's..");
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      
      todos: [...this.state.todos, newItem]
    })
  }

  toggleItem = (clickedOnId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === clickedOnId) {
          
        return {
          ...item,
          completed: !item.completed,
        }
       } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>to do: finish this project</h3>
        <TodoForm 
          addItem = {this.addItem}
        />
        <TodoList
          todos = {this.state.todos}
          clearCompleted = {this.clearCompleted}
          toggleItem = {this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
