import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'
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
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }
  toggleItem = (clickedOnId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if(item.id === clickedOnId) {
          return{
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }   
      }),      
    });     
  };

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  };
 
  render() {
    return (
      <div className='app'>
        <h2>My Todo List</h2>
        <div className='form'>
           <TodoForm addTask={this.addTask} />
        </div>
        <div className='list'>
          <TodoList 
            toggleItem={this.toggleItem}
            todos={this.state.todos}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
