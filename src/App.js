import React from 'react'; 
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"



const items = [
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
      task: 'Clean Dishes',
      id: 12345,
      completed: false
    },
    {
      task: 'Walk the Dog',
      id: 1528817084358,
      completed: false
    }
  ];


class App extends React.Component {
  constructor() {
    super();
    this.state  = {
      items: items
    }
  }
  render() {
    return (
      <div>
        <h2>Todo App!:</h2>
        <TodoList items = {this.state.items}/>

       {/* <TodoForm /> */}

        <button>Clear Tasks</button>
      </div>
    );
  }
}

export default App;
