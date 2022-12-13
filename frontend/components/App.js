import React from 'react'
import Form from './Form'
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{
        name: "Walk Jasia",
        id: Date.now(),
        completed: false
      }],
    }
  }
  
  handleSubmit = (e,item) => {
    e.preventDefault();
    if(item){
      const newItem = {
        name: item,
        id: Date.now(),
        completed: false
      }
      this.setState({data: [...this.state.data, newItem]})
    }
  }

  toggleCompleted = itemId => {
    this.setState({...this.state, data: this.state.data.map(task => {
      if(task.id === itemId) {
        return {...task,completed: !task.completed}
      }
      return task
    })})
  }

  clearCompleted = () => {
    this.setState({data: this.state.data.filter(task => {
      if(!task.completed) return task;
    })})
  }


  render() {
    return (
      <div>
        <TodoList toggleCompleted={this.toggleCompleted} data={this.state.data}/>
        <Form clear={this.clearCompleted} submit={this.handleSubmit} test={this.state.test}/>
      </div>
    )
  }
}