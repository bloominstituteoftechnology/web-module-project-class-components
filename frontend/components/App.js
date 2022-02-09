import React from 'react'
import TodoList from './TodoList';
import Form from './Form';
import axios from 'axios';


const URL = `http://localhost:9000/api/todos`;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        },
        {
          name: 'Clean House',
          id: 1528817077286, 
          completed: false
        },        
      ]
    }
  }

  handleAdd = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false      
    }

    // axios.post(URL, payloadToSend)
    // .then(res => {
    //   this.setState({ ...this.state, quotes: res.data.quotes })
    // })
    // .catch(err => {
    //   this.setState({ ...this.state, error: errorFromAPI })
    // })

    this.setState({
      ...this.state,
      todos: [this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === true)
      })
    })
  }

  componentDidMount() { 
    // console.log('did mount')
    axios.get(URL)
      .then(res => {
        console.log(res) 
        this.setState({ ...this.state, todolist: res.data.data })
      })
      .catch(this.onError)
  }


  render() {
    console.log(this.state);
    
    const { todos } =  this.state; 
    
    return (
      <div>
        <h1>Todo App</h1>

        <TodoList todos={todos}/>
        <Form handleAdd={this.handleAdd}/>
        
        <button onClick={this.handleClear}>clear</button>
      </div>
    )
  }
}
