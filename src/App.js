import React from 'react';
import TodoList from './components/TodoList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addItem = (item) => {
    //console.log(item)
    const newItem = {
      id: Date.now(),
      name: item.inputValue,
      completed: false
  }
  
    const newTodos = [...this.state.todos, newItem]
    this.setState({
      todos: newTodos
    })
    console.log(this.state.todos)
  }
  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }
  toggleCompleted = (id) => {
     this.setState({
         todos: this.state.todos.map((todo) => {
          if(todo.id === id) {
          return{  ...todo,
            completed: !todo.completed
           };
          }
          return todo;
        })
       })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} addItem={this.addItem} clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
