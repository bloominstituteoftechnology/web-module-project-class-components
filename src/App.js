import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import Todo from './components/Todo.css' 

const todos = [
  {
    task: 'Organize Office',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  },
  {
    task: 'Clean Bathroom',
    id: 3,
    completed: false
  },
  {
    task: 'Meal Prep',
    id: 4,
    completed: false
  },
  {
    task: 'Start Packing',
    id: 5,
    completed: false
  },
  {
    task: 'Play with Kitties',
    id: 6,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        todos
      }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
 toggleTodo = (clickedId) => {
   console.log({clickedId})
   this.setState({
     ...this.state,
     todos: this.state.todos.map((todo)=> {
       if (todo.id === clickedId) {
         return {
           ...todo,
           completed: !todo.completed
         }
       }
       else{
         return todo;
       }
     })
   })
 }

clearCompleted = (e) => {
   e.preventDefault()
   this.setState({
     todos: this.state.todos.filter((todo) => !todo.completed)
   })
 }
  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  
  render() {
    return (
      <div className="app-container">
        <h1>Let's Todo Something!</h1>
        <TodoForm 
        key={this.id}
        addTodo={this.addTodo}/>
        <TodoList
        key={this.id} 
        todos={this.state.todos} toggleTodo={this.toggleTodo}
        clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
