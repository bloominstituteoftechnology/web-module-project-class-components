import React from 'react';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: [
        {
          task: '',
          key: Date.now(),
          completed: false,
        },
      ],
    };
  };

  //add new todo
  addTask = (taskName) => {
    console.log('adding item:', taskName);
    const newTask = {
      task: taskName,
      key: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state.taskList,
      newTask,
    });
  };

  //handlesubmit
  handleSubmit = e => {
    e.preventDefault();
    this.addTask();
  };

  //handleChange
  handleChanges = e => {
    console.log('task:', e.target.value);

    this.setState({
      ...this.state.taskList,
      task: e.target.value,
    });
        console.log('state', this.state.taskList)
  };

  render() {
    return (
      <div>
        <h2>App Component</h2>
        <ToDoForm
          handleSubmit={this.handleSubmit}
          handleChanges={this.handleChanges}
          addItem={this.addItem}
          />
        <ToDoList taskList={this.state.taskList}/>
      </div>
    );
  }
}

export default App;
