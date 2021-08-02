import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


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
    task: 'Clean gardern',
    id: 1528817077287,
    completed: false
  },
  {
    task: 'Bake Cake',
    id: 1528817084359,
    completed: false
  }
 
];

class App extends React.Component {
  constructor() {
    super();
    this.state={
      todo:todo
    }
  }

  handleAddItem = (name) =>{
    const newTodo = {
      task: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newTodo]
    })
  }
  


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo}/>
        <TodoForm handleAddItem={this.handleAddItem}/>
      </div>
    );
  }
}

export default App;
