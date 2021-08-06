import React from 'react';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

const toDoList = [
  {
    name: 'Clean room',
    id: 1,
    completed: false
  },
  {
    name: 'Study',
    id: 2,
    completed: false
  },
  {
    name: 'Code',
    id: 3,
    completed: false
  },
  {
    name: 'meditate',
    id: 4,
    completed: false
  },
]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    }
  }

  addToList = (itemName) => {
    this.setState({
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        {
          name: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }



  toggleCompleted = (itemId) => {
    // console.log("toggling purchased:", itemId);
    // map through the array, building a new array from the items
    // when an item matches the one clicked, toggle its purchased flag
    // otherwise, don't make any changes
    const updatedList = this.state.toDoList.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      else {
        return item;
      }
    });
    // console.log("updated groceries:", updatedGroceryList);
    this.setState({
      ...this.state,
      toDoList: updatedList
    });
  }

  clearCompleted = () => {
    console.log('clearing');
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.filter(item => !item.completed)
    })

  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome Juans Todo App!</h2>
        <TodoForm addToList={this.addToList} />
        <TodoList toDoList={this.state.toDoList} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
