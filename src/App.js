import React from 'react';
import toDoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const list = [

  {
    task: 'Clean Room',
    id: 1001,
    completed: false
  },
  {
    task: 'Vacuum',
    id: 1002,
    completed: false
  },
  {
      task: 'Meal Prep',
      id: 1003,
      completed: false
    },
    {
      task: 'Plan Weekend',
      id: 1004,
      completed: false
    },
    {
      task: 'Brush Teeth',
      id: 1005,
      completed: false
    },

];

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      list: list
    }
  }

  // 1 - Create clearing function

  handleClear = () => {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => !item.completed)
    });
  }

  // 2 - Create adding item function

  handleAddItem = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      ...this.state,
      list: [ ...this.state.list, newTask ]
    })

  }

  // 3 - Toggle completed to/from uncompleted with click

  handleToggle = (task) => {

    this.setState({
      ...this.state,
      list: this.state.list.map( todo => {
        if (todo.id === task.id) {
          return {
            ...list,
            completed: !list.completed
          }
        }
        return list;
      })
    });
  }

  
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm 
        handleClear={this.handleClear} 
        handleAddItem={this.handleAddItem} 
        />
        <toDoList 
        list={this.state.list} 
        handleToggle={this.handleToggle} 
        />
      </div>
    );
  }
}

export default App;
