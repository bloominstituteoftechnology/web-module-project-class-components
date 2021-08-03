import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super()
  this.state = {
    input:'',
    tasklist:[{
      task: 'eat Vic',
      completed:true
    },
    {
      task: 'kill Vic',
      completed: false
       
    }]

  }
  this.handleChanges = this.handleChanges.bind(this);
  this.handleClick = this.handleClick.bind(this);
}
handleChanges = e => {
  this.setState({
    ...this.state,
    input:e.target.value
  })
  
  // update state with each keystroke
};
handleClick = (e)=> {
  e.preventDefault();
  this.setState({
    input: '',
    tasklist:[...this.state.tasklist,{
      task:this.state.input,
      completed:false 
    } ]

  })
}

  render() {
    return (
      <div>
        <TodoList tasklist={this.state.tasklist}/>
        <TodoForm input={this.state.input} handleChanges = {this.handleChanges} handleClick = {this.handleClick}/>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
