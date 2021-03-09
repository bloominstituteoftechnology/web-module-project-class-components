import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = {
  task: 'fix this',
  id: 12345574,
  completed: false,
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo,
      count: 0,
    };
  }

  toggleTask = (clickedOnId) => {
    this.setState({
      todo: this.state.toDo.map(task => {
        return task.id === clickedOnId ? {...task, completed: !task.completed} : task;
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date.now(),
      completed: false,
    };
    this.setState({
      todo: [...this.state.todo, newTask],
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
        todo={this.state.todo}
      />
      </div>
    );
  }
}

export default App;
