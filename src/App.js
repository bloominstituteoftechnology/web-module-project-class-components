import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'
import './components/Todo.css'

const data = [
  {
    task:"Laundry",
    id: 1,
    completed:false,
  },
  {
    task:"Dishes",
    id: 2,
    completed:false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: data,
    }
  }
  toggleItem = (clickedID) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === clickedID) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  }
  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todo: [...this.state.todo, newTask],
    });
    console.log(this.state.todo)
  };
  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter((item)=>{
        return !item.completed
      })
    })
  }
  render() {
    return (
      <div>
        <TodoList todo = {this.state.todo} toggleItem={this.toggleItem}></TodoList>
        <TodoForm addTask = {this.addTask} clearCompleted={this.clearCompleted}></TodoForm>
      </div>
    );
  }
}

export default App;
