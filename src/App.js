import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'


const todo  = [
  {
      task: 'Go Shopping for Dinner',
      id: 1,
      completed: false,
  },
  {
      task: 'Feed the Dog',
      id: 2,
      completed: false
  },
  {
      task: 'Walk the Dog',
      id: 3,
      completed: false
  },
  {
      task: 'Do Laundry',
      id: 4,
      completed: false
  },
  {
      task: 'Make Dinner',
      id: 5,
      completed: false
  },
  {
      task: 'Do Classwork',
      id: 6,
      completed: false
  },
  {
      task: 'Study',
      id: 7,
      completed: false
  },
  {
      task:'Shower',
      id: 8,
      completed: false
  },
  {
      task: 'Read',
      id: 9,
      completed: false
  },
  {
      task:'Brush Teeth',
      id: 0,
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
      todo: todo
    }
  }

  addTodo = newTodo => {
    this.setState({
      todo: [...this.state.todo, {
        task: newTodo,
        id: Date.now(),
        completed: false
      }]
    })
  }

  toggleCompleted = todoId => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === todoId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
            <h2>Daily ToDos List</h2>
            <TodoList  todo={this.state.todo} clearCompleted={this.clearCompleted}  toggleCompleted={this.toggleCompleted}/>
         </div>
        <TodoForm addTask={this.addTodo}  /> 
        </div>
    );
  }
}

export default App;
