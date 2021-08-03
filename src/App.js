import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const initialValues = [{
  name: '',
  id: '',
  completed: false
}]


class App extends React.Component {
    constructor() {
      super();
      this.state = {
        initialValues: initialValues}}

    addTodo = name => {
        const newTodo = {
        name: name,
        id: Date.now(),
        completed: false
      }
      this.setState({
        ...this.state,
        initialValues: [...this.state.initialValues, newTodo]
      })
    }

    clearCompleted = () => {
      this.setState({
        ...this.setState,
        initialValues: this.state.initialValues.filter(todo => {
          return todo.completed === false
        })
      })
    }

    toggleTodo = id => {
      console.log("App:", id);
      this.setState({
        ...this.state.initialValues,
        initialValues: this.state.initialValues.map(todo =>{
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
        <h1>To do list:</h1>
        </div>
        <div>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <div>
          <TodoList todoList={this.state.initialValues} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;