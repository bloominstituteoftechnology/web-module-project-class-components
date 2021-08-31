// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.

import React from 'react';
import "./components/Todo.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos
    };
  }
  
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

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo)=> {
        return(todo.completed === false);
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo App</h2>
          <TodoForm handleAdd={this.handleAdd}/>
        </div>
        <div>
          <TodoList handleClear={this.handleClear} handleToggleComplete={this.handleToggleComplete} todos={this.state.todos} />
       </div>
       
        
      </div>
    );
  }
}

export default App;
// ---------------------------------------------

// import React from "react";
// import TodoList from "./components/TodoList";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       Todo: [{ task: "organize", id: 100, completed: false }],
//       currentEntry: { task: "", id: 0, completed: false },
//     };
//   }

//   onInputChange = (e) => {
//     const value = e.target.value;
//     this.setState({
//       currentEntry: { task: value, id: Date.now(), completed: false },
//     });
//     console.log(this.state.currentEntry);
//   };

//   onAddTodo = (e) => {
//     this.setState({ Todo: [...this.state.Todo, this.state.currentEntry] });
//     this.setState({ currentEntry: { task: "", id: 0, completed: false } });
//   };

//   onClearCompleted = (e) => {
//     const newState = this.state.Todo.filter((item) => {
//       return item.completed === false;
//     });

//     this.setState({ Todo: newState });
//   };

//   clickItem = (e) => {
//     const id = Number(e.target.id);
//     const newState = this.state.Todo.map((item) => {
//       if (item.id === id) {
//         item.completed = !item.completed;
//         return item;
//       } else {
//         return item;
//       }
//     });
//     this.setState({ Todo: newState });
//   };
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//         <TodoList
//           Todo={this.state.Todo}
//           onInputChange={this.onInputChange}
//           onAddTodo={this.onAddTodo}
//           clickItem={this.clickItem}
//           currentEntry={this.state.currentEntry}
//           onClearCompleted={this.onClearCompleted}
//         />
//       </div>
//     );
//   }
// }
// export default App;
