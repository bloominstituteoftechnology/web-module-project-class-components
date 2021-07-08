import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

const todoItems = [
    {
        task: 'Learn setState()',
        id: 1,
        completed: false
    },
    {
        task: 'Style My TodoList',
        id: 2,
        completed: false
    }
]

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: todoItems
        }
    }

    handleAddItem = () => {
      const item = {
        task: (''),
        id: this.state.todoItems.length,
        comlpeted: false
    }

      const newTodoItems = [...this.state.todoItems, item]
      this.setState({
        todoItems: todoItems
      })
    }

    handleItemToggle = (itemId) => {
      this.setState({
        todoItems: this.state.todoItems.map(item => {
          if (itemId === item.id) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return item;
        })
      })
    }

    handleClearItem = () => {
      const newTodoItems = this.state.todoItems.filter(item => {
        return !item.completed
      })
      this.setState({
        todoItems: newTodoItems
      })
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Todo List</h1>
                    <TodoForm handleAddItem={this.handleAddItem} />
                </div>
                <TodoList handleClearItem={this.handleClearItem} handleItemToggle={this.handleItemToggle} todoItems={this.state.todoItems} />
            </div>
        )
    }
}


export default App;
