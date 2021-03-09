import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task: 'fix this',
    id: 12345574,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  toggleTask = (clickedOnId) => {
    this.setState({
      todos: this.state.toDo.map(task => {
        return task.id === clickedOnId ? {...task, completed: !task.completed} : task;
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  };


  render() {
    return (
      <div>
        <div>
          <h2>Todo list</h2>
          <TodoForm addTask={this.addTask} />
        </div>
      <TodoList
        toggleTask={this.toggleTask}
        todo={this.state.todos}
      />
      </div>
    );
  }
}

export default App;
