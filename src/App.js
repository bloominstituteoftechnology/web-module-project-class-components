import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.scss';

const chores = [
  {
    name: 'Laundry',
    id: 123,
    completed: false
  },
  {
    name: 'Garbage',
    id: 124,
    completed: false
  },
  {
    name: 'Mop',
    id: 125,
    completed: false
  },
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      chores: chores
    }
  }

  handleCompleted = (id) => {
    this.setState({
        ...this.state, 
        chores: this.chores.map((chore) => {
          if(chore.id === id) {
            return({
              ...chore,
              completed: !chore.completed
            });
          } else {
            return(chore);
          }
        })
    });
}

handleAdd = chore => {
  const newChore = {
    name: chore,
    id: Date.now(),
    completed: false
  };
  this.setState({
    ...this.state,
    chores: [...this.state.chores, newChore]
  });
}

handleClear = () => {
  this.setState({
    ...this.state,
    chores: this.state.chores.filter((chore)=> {
      return(chore.completed === false);
    })
  });
}

  render() {
    return (
      <div className="App">
        <div className="Header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd}/>
      </div>
      <TodoList handleClear={this.handleClear} handleCompleted={this.handleCompleted} chores={this.state.chores}/>
      </div>
    );
  }
}

export default App;
