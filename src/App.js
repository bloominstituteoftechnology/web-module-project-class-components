import React from 'react';

//import TodoForm from './components/TodoForm';
//import TodoList from './components/TodoList';


const todo = [
  {
      task: 'Pay Bills',
      id: Date.now(),
      completed: false  
  },
  {
      task: 'Feed Willow',
      id: Date.now(),
      completed: false
  },
  {
      task: 'Complete Wrenley Paperwork',
      id: Date.now(),
      completed: false
  }
];

class App extends React.Component {
  constructor() {
      super();
      this.state = {
        todo:todo
      }
  }


  render() {
    return (
      <div className="App">

          <div className="header">
            <h1>My Task List</h1>
            {/* <TodoForm/> */}
          </div>

          <div>
            {/* <TodoList todo={todo}/> */}
          </div>
      </div>
    );
  }
}

export default App;


///////////HANDLER FUNCTIONS///////////
//Add functionality <is this here or in a different component?>
    //toggle the box from false to true once completed, adding a line-through style property upon true
    //remove completed todos <.filter> when clicking Clear Completed button, that are toggled true