import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'
const todoList = [
  {
    name: 'stuff',
    id: '1234',
    complete: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any cdge handlers you need to work with your state
  
  
  constructor(){
    super();
    this.state ={
      todoList: todoList
    }
    
  }
  handleToggle = (id) => {
    //1. have a copy of state.
    //2. set groceries slice of state
    //3. find the item that I clicked on
    //4. flip the value of purchased for that item
    //5. leave all the other items alone.

    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(item=> {
        if (item.id === id) {
          return ({
            ...item,
            complete: !item.complete
          });
        } else {
          return item;
        }
      })
    });
  }
  handleAddItem = (name)=> {
    const newItem = {
      name: name,
      id: Date.now(),
      complete: false
    }

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newItem]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todoList:this.state.todoList.filter(item => {
        return(!item.complete);
      })
    });
  }
 
 
  render() {
    console.log(this.state);
    return (
      <div>
        <h2>-Todo App-</h2>
        <TodoList  handleClear={this.handleClear}handleToggle={this.handleToggle} todoList={this.state.todoList} />
        <TodoForm handleAddItem={this.handleAddItem}/>
      </div>
    );
  }
}

export default App;
