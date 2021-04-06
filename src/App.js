import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoList'


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const objectives = [
    {
      name : "Do homework",
      id: 123,
      completeted: false
    },
    {
      name : "Workout",
      id: 321,
      completeted: false
    },
    {
      name : "Meditate",
      id: 231,
      completeted: false
    },
    {
      name : "Read new book",
      id: 132,
      completeted: false
    },
  ];
 
  class App extends React.Component {
    constructor(){
      super();
      this.state = {
        objectives : objectives
      }
    }

    toggleDone = (id) => {
      const newObjective = this.state.objectives.map (obj => {
        if(obj.id === id) {
          return ({
            ...obj,
            completed: !obj.completed
          });
        } else{
          return obj
        }
      });
      this.setState({
        objectives:newObjective
      });
    }

    addTodo = (todoName) =>{
      this.setState({
        objectives: [...this.state.objectives, {
          name: todoName,
          id : this.state.objectives.length,
          purchased: false,
        }]
      });
    }

    clearFinished = () => {
      this.setState ({
        objectives: this.state.objectives.filter(obj => {
          return (!objectives.completed)
        })
      });
    }
  
  
  
    render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo = {this.addTodo} />
        <TodoList clearFinished = {this.clearFinished} toggleDone = {this.toggleDone} objectives = {this.state.objectives}/>
      </div>
    );
  }
}



export default App;
