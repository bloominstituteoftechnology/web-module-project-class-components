import React from 'react';
// import ReactDom from 'react-dom';
import TaskForm from './components/TaskForm';
import Todo from './components/TodoList';
import {v4 as uuidv4} from 'uuid';
import './styles.scss';

const list = [{
  task: "Task 1",
  id: uuidv4(),
  completed: false,
},{
  task: "Task 2",
  id: uuidv4(),
  completed: false,
},{
  task: "Task 3",
  id: uuidv4(),
  completed: false,
},{
  task: "Rake lawn",
  id: uuidv4(),
  completed: false,
},
{
  task: "Buy groceries",
  id: uuidv4(),
  completed: false,
},
{
  task: "Get gas",
  id: uuidv4(),
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
      list: list
    }
  }

  clearCompleted = () => {
    const newList = this.state.list.filter(item => {
      return(item.completed === false);
    });
    this.setState({
      list: newList,
    })
  }

  toggleItem = (id) => {
    const newItems = this.state.list.map(item => {
      if (item.id === id) {
       // console.log("about to toggle", item);
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return (item);
      }
    });
    this.setState({
      list: newItems
    });
  }

  addItem = (task) => {
    const newItem = {
      task: task,
      id: uuidv4(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    })
  }

    render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your To-Do App!</h2>
          <TaskForm addTask={this.addItem} />
        </div>

        <Todo clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} list={this.state.list} />  
      </div>   
    );
  }
}

export default App;
