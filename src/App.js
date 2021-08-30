// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.

import React from 'react';
// -----------👇🏻
import "./components/Todo.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// ------------👆🏻

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // -----------👇🏻

  constructor(){
    super();
    this.state = {
      todos: todos
    };
  }

  // Feature 1: Add the functionality to toggle your todo's completed flag from `false` to `true`. Once a todo is completed, be sure to demonstrate to the user that the todo is completed by adding a line-through style property if the completed flag is true.
  
  handleToggleComplete = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo)=> {
        if (todo.id === id) {
          return({
              ...todo,
              completed: !todo.completed
            });
        } else {
          return(todo);
        }
      })
    });
  }




  // Feature 2: Add an item to your todo
  handleAdd = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }






  // Feature 3: Add the ability to remove any todos that you have completed. `.filter` will be your best friend here. When a user clicks on the `Clear Completed` button call your handler function that will filter out any todos that have the completed flag toggled to `true`.


  handleClear = () => {
    //1. setState
    //2. spread state
    //3. groceries should be set to all groceries that have not been purchased
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo)=> {
        return(todo.completed === false);
      })
    });
  }

  // ------------👆🏻



  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App</h2>
        <TodoForm handleAdd={this.handleAdd}/>
        <div>
          <TodoList handleClear={this.handleToggleComplete} todos={this.state.todos}/>
        </div>
       
        
      </div>
    );
  }
}

export default App;
