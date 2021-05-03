import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
        todo: todo
    }
}
toggleTodo = (id) => {
    const newTodo = this.state.todo.map(item => {
        if(item.id === id) {
            return {
                ...item,
                finished: !item.finished
            }
        } else {
            return(item);
        }
    });
    this.setState({
        todo: newTodo
    });
}
addTodo = (title) => {
    const newTodo = {
        name: title,
        id: this.state.todo.length,
        finished: false
    };
    clearFinished = () => {
        const newTodo = this.state.todo.filter(item => {
            return(item.finished === false);
        });
        this.setState({
            todo: newTodo
        })
    }

  render();
   {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          clearFinished={clearFinished}
          toggleTodo={this.toggleTodo}
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
