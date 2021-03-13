import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.scss'

const global_todo = [
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
    task: 'Laundry',
    id: 1528817077259,
    completed: false
  },
  {
    task: 'Groceries',
    id: 1528817077260,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 1528817077261,
    completed: false
  }, 
  {
    task: 'Wash The Car',
    id: 1528817077262,
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
      todo : global_todo
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
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList thingsToDo={this.state.todo} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
