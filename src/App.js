import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
const todos = [
  {
    task: 'Organize Kitchen',
    id: 1528817077281,
    completed: false
  },
  {
    task: 'clean dishes',
    id: 1528817084352,
    completed: false
  },
  {
    task: 'Bake some goodies',
    id: 1528817084353,
    completed: false
  },
  {
    task: 'go for a walk',
    id: 1528817084354,
    completed: false
  },
  {
    task: 'start codding',
    id: 1528817084355,
    completed: false
  },
  {
    task: 'more codding',
    id: 1528817084356,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 // Constructor with state
 constructor() {
  super();
  this.state = {
    todos: todos,
    otherVar: "something"
  }
}
// Class methods to update state
toggleTodo = todoId => {
  console.log("Toggling todo", todoId);
  // map over the todos array
  // When we find the todo clicked, toggle its completed flag
  const updatedTodos = this.state.todos.map(todo => {
    if (todoId === todo.id) {
      return { ...todo, completed: !todo.completed }
    }
    return todo;
  });
  console.log("updated todos array", updatedTodos);
  this.setState({
    ...this.state,
    todos: updatedTodos
  });
}
addTodo = todoName => {
  this.setState({
    ...this.state,
    todos: [
      ...this.state.todos,
      {
        task: todoName,
        id: Date.now(),
        completed: false
      }
    ]
  })
}
clearCompleted = e => {
  // filter all todos with copmpleted: true from this.state.todos
  e.preventDefault();
  this.setState({
    ...this.state,
    todos: this.state.todos.filter(todo => !todo.completed)
  })
}
// Lifecycle methods to handle API calls, event listeners, and other side effects
// render method to render HTML to the DOM
render() {
  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
      </div>
      <TodoList clearCompleted={this.clearCompleted} toggleTodo={this.toggleTodo} todos={this.state.todos} />
    </div>
  );
}
}
export default App;