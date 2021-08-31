import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


const toDoList = [
  {
    name: 'Wake Up',
    id: 1,
    completed: false
  },
  {
    name: 'Code',
    id: 2,
    completed: false
  },
  {
    name: 'Eat',
    id: 3,
    completed: false
  },
  {
    name: 'Sleep',
    id: 4,
    completed: false
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoList,
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

    // console.log("toggling purchased:", itemId);
    // map through the array, building a new array from the items
    // when an item matches the one clicked, toggle its purchased flag
    // otherwise, don't make any changes

  toggleCompleted = (itemId) => {

    const updatedList = this.state.toDoList.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      else {
        return item;
      }
    });
   
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
      <div className="App">
        <header>
        <h2>Welcome to your Todo App </h2>
        </header>
         <TodoForm addToList={this.addToList} />
         <TodoList toDoList={this.state.toDoList} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App
