import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

class App extends React.Component {

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state={
    todos:[]
  }
}
toggleItem = (itemId) => {
  this.setState ({
    todos: this.state.todos.map((item)=>{
      if (item.id === itemId) {
        console.log('item completed', item.completed)
        return {
          ...item,
          completed: !item.completed
        }
       
      }
      return item;
    })
  })
}

clearCompleted = () => {
    
    this.setState({
      todos: this.state.todos.filter((item) => {
        return !item.completed;
      })
    });
  };




addTodo = (todoName) => {
  this.setState({
    todos: [
      ...this.state.todos, {todo: todoName, id: Date.now(), completed: false}
    ]
  })
        
}

render() {
   
  return (
    <>
    <div className="header">
      <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
      </div>
      <div className="todos">
      <TodoList 
      todo={this.state.todos} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}/>
    </div>
    </>
  );
}
}
export default App;
