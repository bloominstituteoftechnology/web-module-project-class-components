import React from 'react';
import ListForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';
const todos = [
  {
    name: 'eat',
    id: 123,
    complete: false
  },

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }
  handleToggle = (id)=> {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=> {
        if(todo.id === id){
          return({...todo,
          complete:!todo.complete
        });
        }
        return todo;
      })
    
    })
  }

handleAddTodo = (name)=> {
  const newTodo = {
    name: name,
    id: Date.now(),
    complete: false
  }
  this.setState({
    ...this.state,
    todos: [...this.state.todos, newTodo]
  });
}

handleClear = ()=> {
  
const completed = this.state.todos.filter(todo=> todo.complete === false)
console.log(completed);
this.setState({
  ...this.state,
  todos: [...completed]
});
return this.state;

}
  render() {
    return (
      <div className="App">
        <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <ListForm handleAddTodo={this.handleAddTodo} />
      </div>
      
      <TodoList handleToggle={this.handleToggle} handleClear={this.handleClear} todos={this.state.todos}/>

      </div>
    );
  }
}

export default App;
