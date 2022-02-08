import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

const initialState = {
  toDos: []
};
export default class App extends React.Component {
  
  state = initialState;

  clearFinished = () => {
    const filtered = this.state.toDos.filter(item => {
      return !item.completed;
    })
    
    this.setState({...this.state, toDos: filtered})
  }
  
  addTodo = (task) => {
    const newTask = {
      id: Date.now(),
      task: task,
      completed: false
    }

    this.setState({...this.state, toDos: [...this.state.toDos, newTask]})
  }

  handleToggle = (task) => {
    const filtered = this.state.toDos.map(item => {
      if(item.id === task.id){
        return {...item, completed: !item.completed};
      }else{
        return item;
      }
    })
    this.setState({...this.state, toDos: filtered})
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
