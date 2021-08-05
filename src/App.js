import React from 'react';
import ToDoForm from './components/TodoForm.js';
import ToDoList from './components/TodoList.js';



const ToDoTasks = [
  {
    task: 'Shopping',
    id: 1,
    completed: false
  },
  {
    task: 'Cleaning',
    id: 2,
    completed: false
  },
  {
    task: 'Exercise',
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      newItem: '',
      ToDoTasks: ToDoTasks
    }
  }

  submitHandler = e => {
    e.preventDefault();

    this.addItem(this.state.newItem)
    
  }

  changeHandler = e => {
    this.setState({
      ...this.state,
      newItem: e.target.value
    });
  }

  addItem = (itemName) => {
    console.log("adding a very cool new item:", itemName)
    this.setState({
      ...this.state,
      ToDoTasks: [
        ...this.state.ToDoTasks,
        {
          task: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      ToDoTasks: this.state.ToDoTasks.filter(item => !item.completed)
    })
  }

  toggleCompleted = (itemId) => {
    // map through the array, building a new array from the items
    // when an item matches the one clicked, toggle its purchased flag
    // otherwise, don't make any changes
    const updatedToDoList = this.state.ToDoTasks.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      else {
        return item;
      }
    });
    this.setState({
      ...this.state,
      ToDoTasks: updatedToDoList
    });
  }

  render() {
    return (
      <div>
        <ToDoForm newItem={this.state.newItem} submitHandler={this.submitHandler} changeHandler={this.changeHandler} addItem={this.addItem} clearCompleted={this.clearCompleted}/>
        <ToDoList ToDoTasks={this.state.ToDoTasks} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
