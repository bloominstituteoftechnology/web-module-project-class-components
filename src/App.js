import React from 'react';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


//this portion handles the pre made to-do list
const doDue = [
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
      toDoItems: doDue
    }
}

  // this helps user add item to list
  addItem = (item) => {
    this.setState({
      ...this.state,
      toDoItems: [
        ...this.state.toDoItems,
        {
          task: item,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <form>
        <label htmlFor="task">To-do
          <input name="task" type="text" />
        </label>
        <button type="submit">Add Task</button>
        </form>
      </div>

    );
  }
}

export default App;
