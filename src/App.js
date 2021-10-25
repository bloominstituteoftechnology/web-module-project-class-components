import React from 'react';
import ToDoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const List = [
  {
    task : 'Learn setState()',
    id : 1,
    added : false
  },
  {
    task : 'Style my Todo List',
    id : 2,
    added : true
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list : List
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      list : this.state.list.filter(task => !task.added)
    })
  }

  handleAddItem = (task) => {
    const newTask = {
    task : task,
    id : Date.now(),
    added : true
    }
    this.setState({
      ...this.state,
      list: [...this.state.list, newTask]
    })
  }

  handleToggleTask = (task) => {
    this.setState({
      ...this.state,
      list: this.state.list.map(event => {
        if(event.id === task.id){
          return {
            ...event,
            added: !event.added
          }
        }
        return event;
      })
    })
    console.log("App: handleToggleItem ", task.task);
  }
  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleToggleTask={this.handleToggleTask} list={this.state.list}/>
        <ToDoForm handleAddItem={this.handleAddItem}/>
        </div>
        <button onClick={this.handleClear} className="clear-btn">Clear Completed</button>
      </div>
    );
  }
}

export default App;
