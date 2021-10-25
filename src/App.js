import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    name:'',
    id:'',
    completed:false
}
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo:todo
    }
  }

  handelClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item => !item.completed)
    });
  }

  handleAddItem = (name) => {
    const newItem = {
      name: name,
      id: Date.now(),
      purchased: false
    };

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newItem]
    });
  }

  handleToggleTodo = (todo) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(done => {
        if(done.name === todo.name) {
          return {
            ...done,
            completed: !done.completed
          }
        }
        return done;
      })
    });
  }

    render() {
      return (
        <div className='app container'>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} />
      </div>
      <TodoList handleToggleTodo={this.handleToggleTodo} todo={this.state.todo} />
      <button onClick={this.handelClear} className='clear-btn'>Clear Completed</button>
      </div>
    );
  }
}

export default App;
