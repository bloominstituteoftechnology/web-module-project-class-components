import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item => !item.completed)
    })
    
}

handleAdd = (e) => {
    e.preventDefault();

}    


handleToggle = (item) => {
this.setState({
  ...this.state, 
  todo: this.state.todo.map(list => {
    if(list.id === item.id) {
      return {
        ...list,
        completed: !list.completed
      }
    }
    return list;
  })
})
}


 // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm  />
        <TodoList handleToggleItem={this.handleToggleItem} todo={this.state.todo} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default App;
