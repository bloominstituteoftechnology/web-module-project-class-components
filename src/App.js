import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const list = [
  {
    task: 'Clean Bathroom',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Load Dryer',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {

  constructor() {
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
        clearFinished={this.clearFinished}
        />
      </div>
    );
  }
}

export default App;