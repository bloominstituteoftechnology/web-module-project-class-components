import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    const masterList = [{
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
    this.state = {
      masterList: masterList
    }
  }
  
   handleToggle = (id) => {
      this.setState({
        ...this.state,
        masterList: this.state.masterList.map(item => {
          if (item.id === id) {
            return ({
              ...item,
              completed: !item.completed
            });
          }
          return item;
        })
      })
    }
    handleAddTodo = (task) => {
      const newItem = {
        task: task,
        id: Date.now(),
        completed: false
      }
      this.setState({
        ...this.state,
        masterList: [...this.state.masterList, newItem]
      })
    }
  
  handleClearBtn = () => {
    this.setState({
      ...this.state,
      masterList: this.state.masterList.filter(item => {
        return (!item.completed);
      })
    });
  }
  
  render() {
    return (
      <>
        <TodoForm handleAddTodo={this.handleAddTodo} handleClearBtn={ this.handleClearBtn}/>
        <TodoList list={this.state.masterList} handleToggle={this.handleToggle} />

      </>
    );
  }
}

export default App;
