import React from 'react';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div className = "toDoForm">
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm/>
        </div>
      </div>
    );
  }
}

class ToDoForm extends React.Component {
  constructor() {
      super();
      this.state = {
          task: {initialToDoDate.task},
          id: {initialToDoDate.id},
          completed: {initialToDoDate.completed},
      };
  }

  handleClick = () => {
      this.setState({
          task: "",
          id:
          completed: 
      });
  }


}

export default App2;

export default App;
