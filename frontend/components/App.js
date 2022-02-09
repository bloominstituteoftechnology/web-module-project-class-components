import React from 'react'
import Form from './Form';
import TodoList from './TodoList';
import axios from 'axios';

const initialState = {
  toDos: []
};
export default class App extends React.Component {
  
  state = initialState;

  componentDidMount(){
    axios.get('http://localhost:9000/api/todos')
    .then(resp => {
      this.setState({...this.state, 
        toDos: resp.data.data
      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  clearFinished = () => {

    const filtered = this.state.toDos.filter(item => {
      return !item.completed;
    })
    
    this.setState({...this.state, toDos: filtered})
  }
  
  addTodo = (task) => {
    
    const newTask = {
      name: task,
      completed: false
    }
    
    axios.post('http://localhost:9000/api/todos', newTask)
    .then(resp => {
      const taskToAdd = {...resp.data.data};
      this.setState({ ...this.state,
        toDos: [...this.state.toDos, taskToAdd]
      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  handleToggle = (task) => {
    const id = task.id;

    axios.patch(`http://localhost:9000/api/todos/${id}`)
    .then(resp => {
      const newStateArray = this.state.toDos.map(item => {
        if(item.id === id){
          return resp.data.data;
        }else{
          return item
        }
      })

      this.setState({...this.state,
        toDos: [...newStateArray]
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <TodoList toDos={this.state.toDos} handleToggle={this.handleToggle}/>
        <Form addTodo={this.addTodo} clearFinished={this.clearFinished}/>
      </div>
    )
  }
}
