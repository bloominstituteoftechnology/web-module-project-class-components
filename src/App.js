import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const todoItems = [
  {
    task: 'Wash Ophelia',
    id: 246,
    completed: false,
  },
  {
    task: 'Take Out Trash',
    id: 369,
    completed: false,
  },
  {
    task: 'Pick Up Groceries',
    id: 123,
    completed: false,
  },
  {
    task: 'Clean Garage',
    id: 234,
    completed: false,
  },
  {
    task: 'Study',
    id: 456,
    completed: false,
  },
  {
    task: 'Organize Office',
    id: 678,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super(); 
      this.state = {
        todoItems: todoItems,
      }
    }

    handleToggleTask = (id) => {
      this.setState({
        todoItems: this.state.todoItems.map((todo) => {
          if(id === todo.id) {
            return {
              ...todo, 
              completed: !todo.completed
            }
          }
          return todo;
        })
      })
    }
    handleAddTask = (task) => {
      const todo = {
        task: task,
        id: this.state.todoItems.length,
        completed: false,
      }
      const newTodoItems = [...this.state.todoItems, todo]
      this.setState({
        todoItems: newTodoItems
      })
    }
    handleCompletedTask = () => {
      const newTodoItems = this.state.todoItems.filter((todo) => {
        return !todo.completed
      })
      this.setState({
        todoItems: newTodoItems
      })
    }
  render() {
    return (
      <div className = 'app'>
      <div className = 'app-header'>
        <h2>Welcome to your Todo List!</h2>
        <TodoForm handleAddTask = {this.handleAddTask}/>
        </div>
        <TodoList
          todoItems={this.state.todoItems}
          handleToggleTask={this.handleToggleTask}
          handleCompletedTask={this.handleCompletedTask}
        />
      </div>
    );
  }
}

export default App;
