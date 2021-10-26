import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';
import './components/Todo.css';



const groceryItems = [
  {
    name: 'Lox',
    id: 1,
    completed: false
  }, 
  {
    name: 'Raspberries',
    id: 2,
    completed: false
  },
  {
    name: 'Milk',
    id: 3,
    completed: false
  },
  {
    name: 'Egg Nog',
    id: 4,
    completed: false
  },
  {
    name: 'Ice Cream',
    id: 5,
    completed: false
  },
  {
    name: 'Coconut',
    id: 6,
    completed: false
  },
  {
    name: 'Coffee',
    id: 7,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div className="app-container">
        <h2>Welcome to your Todo List!</h2>

        <div>
          <h4>Let's start adding things!</h4>
          <ToDoForm />
        </div>

        <div>
          <ToDoList />
        </div>

        <div>
          <button> Update List </button>
        </div>


        {/* APP CONTAINER ENDS HERE */}
      </div>
    );
  }
}

export default App;
