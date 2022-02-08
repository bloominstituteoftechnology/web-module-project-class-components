import React from 'react'
import axios from 'axios';
import Form from './Form';
import ToDo from './Todo'
import TodoList from './TodoList';


const initialState = {
  toDos: [],
  error: ''
};
export default class App extends React.Component {
  
  state = initialState;

  componentDidMount() {
    axios.get('http://localhost:9000/api/todos')
    .then(resp => {
      console.log('resp: ', resp);
      this.setState({...this.state, toDos: resp.data.data});
    })
    .catch(error => {
      console.log('error: ',error.message);
      this.setState({...this.state, error: error.message})
    })
  }
  
  addTodo(toDoToBeAdded) {
    console.log(...this.state)
    this.setState({ ...this.state, toDos: [...this.state.toDos, toDoToBeAdded]})
  }


  render() {
    return (
      <div>
        <TodoList toDos={this.state.toDos}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
