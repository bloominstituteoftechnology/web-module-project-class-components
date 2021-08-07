import React from 'react';
import ToDoForm from './components/TodoForm'
import TodoList from './components/TodoList'


//this portion handles the pre made to-do list
const taskList = [
  {
    task: 'Maker Dinner',
    id: 1,
    completed: false
  },
  {
    task: 'Study',
    id: 2,
    completed: false
  },
  {
    task: 'Wash Dishes',
    id: 3,
    completed: false
  },
  {
    task: 'Read',
    id: 4,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  // this handles initializing the state in the whole app
  constructor() {
    super();
    this.state = {
      taskList: taskList
    }
  }
  

  // this helps user add item to list
  addItem = (item) => {
    this.setState({
      ...this.state,
      taskList: [
        ...this.state.taskList,
        {
          task: item,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  // this helps me toggle between false and true on the completed key
  toggleComplete = (itemId) => {
    const newTaskList = this.state.taskList.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item
      }
    })
    this.setState({
      ...this.state,
      taskList: newTaskList
    })
  }

  deleteFinished = (props) => {
    this.setState({
      ...this.state,
      
    })
  }


  render() {
    return (
      <div>
        <ToDoForm addItem={this.addItem} />
        <TodoList
          taskList={this.state.taskList}
          toggleComplete={this.toggleComplete}
          deleteFinished={this.deleteFinished}
        />
      </div>

    );
  }
}

export default App;
