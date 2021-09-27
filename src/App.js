import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

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
    task: ' Added the Clear Button',
    id: 1528817077288,
    completed: false
  },
  {
    task: ' Added the Add button',
    id: 1528817077246,
    completed: false
  },
  {
    task: ' Finishing the MVP',
    id: 1528817077226,
    completed: false
  },
  {
    task: 'Doing Stretch Goals',
    id: 1528817077280,
    completed: false
  },
];




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo:todo
    }
  }
  handleToggle = (id) =>{
    this.setState({
      ...this.state,
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return({
            ...item,
            completed: !item.completed
          })
        }else{
          return item;
        };
      })
    });
  }

  handleAddItem = (task) =>{
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todo:[...this.state.todo, newTask]
    })
  }

  handleClear = () =>{
    this.setState({
      ...this.state,
      todo:this.state.todo.filter(item =>{
        return(!item.completed)
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} />
        <div>
        <TodoList handleClear={this.handleClear} handleToggle={this.handleToggle} todo={this.state.todo}/>
        </div>
      </div>

    );
  }
}

export default App;
