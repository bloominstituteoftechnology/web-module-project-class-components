import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './comonents/TodoForm';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      list:list
    }
  }

  toggleFinished = (todoId) => {
    const updatedTodoList = this.state.list.map(todo => {
      if (todo.id === todoId) {
        return {...todo, finished: !todo.finished};
      }
      else{
        return todo;
      }
    });
    this.setState({
      ...this.state,
      list: updatedTodoList
    });
  }

  addTodo = (todoName) => {
    this.setState({
      ...this.state,
      list: [
        ...this.state.list,
        {
          task: todoName,
          id: Date.now(),
          finished: false
        }
      ]
    })
  }

  clearFinished = () => {
    this.setState({
      ...this.state,
      list: this.state.list.filter(todo => !todo.finished)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
        list={this.state.list}
        toggleFinished={this.toggleFinished}
        clearFinished={this.clearFinished} />
      </div>
    );
  }
}

export default App;
