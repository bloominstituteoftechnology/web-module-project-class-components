import React from 'react';

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



const todo = [
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
    task: 'Groom Dog',
    id: 1528817077289,
    completed: false
  },
  {
    task: 'Clean Brushes',
    id: 1528817084355,
    completed: false
  },
  {
    task: 'Make Bed',
    id: 1528817077556,
    completed: false
  },
  {
    task: 'Laundry',
    id: 1528844084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  toggleTask = (id) => {
    const newTodo = this.state.todo.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return (task);
      }
    });

    this.setState({
      todo: newTodo
    });
  }

  addTask = (title) => {
    const newTask = {
      name:title,
      id:this.state.todo.length,
      completed: false
    };
    
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }

  clearTodo = () => {
    const newTodo = this.state.todo.filter(item => {
      return(task.completed === false);
    });


    this.setState({
      todo: newTodo
    })
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <h2>ToDo List MVP</h2>
      </div>
    );
  }
}

export default App;


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state