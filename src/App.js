import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const my_todo = [
  {
    task: 'think happy thoughts',
    id: 707,
    completed: false
  },
  {
    task: 'drink more water',
    id: 606,
    completed: false
  },
  {
    task: 'laundry',
    id: 505,
    completed: false
  },
  {
    task: 'push-ups',
    id: 404,
    completed: false
  },
  {
    task: 'clean something',
    id: 303,
    completed: false
  },
  {
    task: 'pray',
    id: 202,
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
      todo : my_todo
    }
  }

  addTask = (taskName) =>{
    this.setState({
      todo:
      [
        ...this.state.todo,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleCompleted = thingToDoId =>{
    this.setState({
      todo: this.state.todo.map(thingToDo=>{
        if(thingToDo.id === thingToDoId){
          return {...thingToDo,
          completed: !thingToDo.completed
          }
        }
        return thingToDo;
      })
    })
  }

  clearCompleted = () =>{
    this.setState({
      todo: this.state.todo.filter(thingToDo =>{
        return !thingToDo.completed
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList thingsToDo={this.state.todo} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
