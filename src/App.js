import React from 'react';
import './components/Todo.css'
import { TodoList } from './components/TodoList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {todos: [
      {
        name: "Mow Lawn",
        id: 0,
        completed: false
      },{
        name: "Wash Dishes",
        id: 1,
        completed: false
      }
    ]}
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = (name) => {
    const neoTodo = [...this.state.todos, {
      name: name,
      id: Date.now(),
      completed: false
    }]
    this.setState({todos: neoTodo});
  }

  removeCompleted = () => {
    const neoTodo = this.state.todos.filter(item => {
        return (item.completed === false);
    })
    this.setState({todos: neoTodo});
  }

  toggleItem = (target) => {
    const neoTodo = this.state.todos.map((item) => {
      if (parseInt(item.id) === parseInt(target) ) {
        return {
          ...item, completed: !item.completed
        }
      } else {
        return item;
      }
    });

    this.setState({ ...this.state,
      todos: neoTodo
    });
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} todoClick={this.toggleItem}
        addClick={this.addTodo} clear={this.removeCompleted}/>
      </div>
    );
  }
}

export default App;
