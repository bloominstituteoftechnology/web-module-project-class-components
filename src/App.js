import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state= {
      todos: [
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
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }
   
  handleAdd = (task) => {

    const newTodo= {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleToggle = (id) => {


    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })

  }

  render() {
    const {todos} = this.state
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos= {todos} handleToggle= {this.handleToggle}/>
        <TodoForm handleAdd= {this.handleAdd}/>
        
        <button onClick= {this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default App;
