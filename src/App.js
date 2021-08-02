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
  handleCompleted = (id) =>{
    this.setState({
      todo: this.state.todo.map(item =>{
        if(item.id === id){
          return({
            ...item,
            completed: !item.completed
          });
        }
        return item;
      })
    })
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
  handleClear = () =>{
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item =>{
        return(item.completed === false);
      })
    })
  }
  


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList   handleCompleted={this.handleCompleted} todo={this.state.todo}/>
        <TodoForm handleClear={this.handleClear} handleAddItem={this.handleAddItem}/>
      </div>
    );
  }
}

export default App;
