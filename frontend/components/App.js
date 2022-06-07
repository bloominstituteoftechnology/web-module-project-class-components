import React from 'react';
import TodoList from './TodoList';

const todoList = [
  {
    name: 'Brush Teeth',
    id: new Date().getTime(),
    completed: false
  }
];

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: todoList
    }
  }

  toggleCompleted = (itemId)=>{
    this.setState({
      todoList: this.state.todoList.map(item => {
        if(itemId === item.id) {
          return{
            ...item,
            completed: !item.completed
          }
        }
      })
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
  }

  render() {
    return (
      <div className='App'>
        <TodoList todoItems={this.state.todoList} toggleCompleted={this.toggleCompleted} />
      </div>
    )
  }
}
