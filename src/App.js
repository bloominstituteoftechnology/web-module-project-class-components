import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const obj = [
  {
  name: 'Go To The Gym',
  id: 45678,
  completed: false
},
{
  name: 'Go To Work',
  id: 465465,
  completed: false
}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      obj: obj
    }
  }

  toggleCompleted = (objId) => {
    // iterate through the objective array (this.state.obj) to toggle the only item in question
    const newObj = this.state.obj.map(obj => {
      if(objId === obj.id) {
        return {
          ...obj,
          completed: !obj.completed
        }
      }
      else { return obj }
    })
    this.setState({
      ...this.state,
      obj: newObj
    })
  }

  addObj = (objName, e) => {
    e.preventDefault();
    const newObj = {
      name: objName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      obj: [...this.state.obj, newObj]
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      obj: this.state.obj.filter(obj => !obj.completed)
    })
  }
  
  render() {
    return (
      <div className='App'>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addObj={this.addObj} />
      </div>
      <TodoList clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} obj={this.state.obj} />
      </div>
    );
  }
}

export default App;
