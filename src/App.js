import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const todoList = [{
  name: '',
  id: '',
  completed: false
}]
class App extends React.Component {
    // Constructor with state
    constructor() {
      super();
      this.state = {
        todoList: todoList
      }
    }

    addTodo = name => {
      console.log('App:', name);
    }
    
    toggleTodo = id => {
      console.log("App:", id);
      //set state for groceries with id's purchased flipped
      this.setState({
        ...this.state.todoList,
        todoList: this.state.todolist.map(todo =>{
          if (todo.id === id){
            return({
              ...todo,
              completed: !todo.completed
            })
          } else {
            return todo
          }
        })
      })
    }

  render() {
    return (
      <div>
        <div className='Header'>
        <h1>ToDo List:</h1>
        </div>
        <div>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
