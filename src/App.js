import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

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
  },
  {
    task: 'Bake Cosdfsdfokies',
    id: 15288170843358,
    completed: true
  }
];

const formValues = [
  {
    newTask: ''
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo,
      formValues: formValues
    }
  }

  handleChange = event => {
    let form = event.target.name;
    this.setState({formValues: {...formValues, newTask: event.target.value }})
  }
  
  addTask = event => {
    const updatedTodo = this.state.todo;
    updatedTodo.push({task: this.state.formValues.newTask, id: Date.now(), completed: false})
    this.setState({
      todo: updatedTodo, 
      formValues: {newTask: ''}
    })
    this.setState()
  }

  clearCompleted = event => {
    let updatedTodo = this.state.todo.filter( item => item.completed === false)
    this.setState({
      todo: updatedTodo
    })
  }

  toggleCompleted = event => {
    let updatedTodo = this.state.todo.map( item => {
      if (event === item.id){
        console.log(item)
        
        return {...item, completed: !item.completed}
      }
      return item
      
    })
    console.log(updatedTodo)
    this.setState({
      todo: updatedTodo
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoList todo={this.state.todo} clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted}/>
        <br />
        <TodoForm formValues={this.state.formValues} handleChange={this.handleChange} addTask={this.addTask}/>
      </div>
      
    );
  }
}

export default App;
