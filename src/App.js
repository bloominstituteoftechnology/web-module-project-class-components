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
      const newTodo = {
        name: name,
        id: Date.now(),
        completed: false
      }
      this.setState({
        ...this.state,
        todoList: [...this.state.todoList, newTodo]
      })
    }

    clearCompleted = () => {
      //should remove completed todo's
      this.setState({
        ...this.setState,
        todoList: this.state.todoList.filter(todo => {
          return todo.completed === false
        })
      })
    }

    toggleTodo = id => {
      console.log("App:", id);
      //set state for todoList with id's purchased flipped
      this.setState({
        ...this.state.todoList,
        todoList: this.state.todoList.map(todo =>{
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
          <TodoList todoList={this.state.todoList} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;
