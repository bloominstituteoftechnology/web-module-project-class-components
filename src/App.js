import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



const todos = [
  {
      task: 'Pay Bills',
      id: Date.now(),
      completed: false  
  },
  {
      task: 'Feed Willow',
      id: Date.now(),
      completed: false
  },
  {
      task: 'Complete Wrenley Paperwork',
      id: Date.now(),
      completed: false
  }
];

class App extends React.Component {
  constructor() {
      super(); 
      this.state = {
        todos:todos // the 'prop' is on the left, the value is on the right, the initial data set
                    //this is a property/value pair - you can have many 
      }
    }

  //Handler Functions to update the state ***We do this in here because we cannot pass down state!
  toggleTodo = todoId => {
    console.log("Toggling todo", todoId);
    const updateTodos = this.state.todos.map(todo => {
      if (todoId === todo.id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    });
    console.log ("updated todos array", updateTodos);
    this.setState({
      ...this.state,
      todos: updateTodos
    });
  }

  addTodo = todoTask => {
    this.setState ({
      ...this.state,
      todos : [
        ...this.state.todos,
        {
          task: todoTask,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

clearCompleted =e => {
  e.preventDefault();
  this.setState({
    ...this.state,
    todos: this.state.todos.filter(todo => !todo.completed)
  })
}

////Lifecycle methods to handle API calls, event listeners, and other side effects

//Render method to render HTML to the DOM in JSX
  render() {
    return (
      <div className="App">

          <div className="header">
            <h1>My To-Do List</h1>
             <TodoForm addTodo={this.addTodo}/> 
          </div>

          <div>
            <TodoList clearCompleted={this.clearCompleted} toggleTodo={this.toggleTodo} todos={this.state.todos}/> 
          </div>
      </div>
    );
  }
}

export default App;


///////////HANDLER FUNCTIONS///////////
//Add functionality 
    //toggle the box from false to true once completed, adding a line-through style property upon true
    //remove completed todos <.filter> when clicking Clear Completed button, that are toggled true

    //*this means within this App component, *state means state explicitly, *todos is the property in the state
  //wrap setState in a handler function and then pass that function down*****, b/c you cannot pass that state down directly in class components