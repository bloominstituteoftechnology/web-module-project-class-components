import React from 'react';
import ReactDom from 'react-dom';

import Todo from './components/TodoList';


const list = [{
  task: "Rake lawn",
  id: 1,
  completed: false

},
{
  task: "Buy groceries",
  id: 2,
  completed: false
}]

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
    // const newList = this.state.list.filter(item => {
    //   return(item.completed === false);
    // });
    // this.setState({
    //   list: newList,
  }

  toggleItem = () => {

  }
  

  render() {
    return (
      <div>
        <h2>Welcome to your To-Do App!</h2>
        <Todo clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} list={this.state.list} />  
      </div>   
    );
  }
}

export default App;
