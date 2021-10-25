import React from 'react';
import ListForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.scss'
const toDo = [
  {
    task: 'Work Out',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: toDo
    }
  }

  handleClear = ()=> {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(item=> !item.completed)
    });
  }

  handleAddItem = (taskInput) => {
    const newItem = {
      task: taskInput,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      tasks : [...this.state.tasks, newItem]
    });
  }

  handleToggleItem = (item) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task,
            completed: !task.completed 
          }
        }
        return task;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>To Do List</h1>
           <ListForm handleAddItem={this.handleAddItem}/>
         </div>
        <TodoList handleToggleItem={this.handleToggleItem} tasks={this.state.tasks} />
        <button onClick={this.handleClear} className="clear-btn">Clear Completed</button>
       </div>
    );
  }

}
export default App;
