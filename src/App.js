import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';




const list = [
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
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor(){
    super();
    this.state = {
        list:list
    }
  }

  handleCompleted = (id) =>{
    this.setState({
      list: this.state.list.map(todo=> {
        if(todo.id === id){
          return ({
            ...todo,
            completed: !todo.completed
          })
        }

        return todo
      })
    })
  }

  handleAddTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      list: [...this.state.list, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      list: this.state.list.filter(todo =>{
        return(todo.completed === false)
      })
    })
  }




  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddTodo = {this.handleAddTodo}/>

        <TodoList handleClear={this.handleClear} handleCompleted={this.handleCompleted} list = {this.state.list}/>
      </div>
    );
  }
}

export default App;
