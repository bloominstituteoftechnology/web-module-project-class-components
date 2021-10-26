import React from 'react';
import TodoList from './components/TodoList'
import "./index.css"

const todolist = []


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todolist: todolist
    }
  }

  handleAddTodo= (item) =>{
    const newTodo ={
      todo: item,
      id:Date.now(),
      done: false
    }
    console.log(todolist)
    this.setState({
      ...this.state,
      todolist: [...this.state.todolist, newTodo]
    })
  }

  clearItems=()=>{
    this.setState({
      ...this.state,
      todolist: this.state.todolist.filter(item=> !item.done)
    })
  }

  toggleItems=(item)=>{
    this.setState({
      ...this.state,
      todolist: this.state.todolist.map(todos=>{
        if(todos.id===item.id){
          return {
            ...todos,
            done: !todos.done
          }
        }
        return todos
      })
    });
  }
  
  render() {
    return (
      <div className="App-container">
        <h1>TodoList</h1>
        <TodoList todolist={this.state.todolist} handleAddTodo={this.handleAddTodo} clearItems={this.clearItems} toggleItems={this.toggleItems}/>
      </div>
    );
  }
}

export default App;