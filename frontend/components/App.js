import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

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
      todoList: todoList,
      inputValue: '',
      hideCompleted: false
    }
  }

  toggleCompleted = (itemId)=>{
    this.setState({
      todoList: this.state.todoList.map(item => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        };
        return {...item};
      })
    });
  };

  inputChange = (e)=>{
    this.setState({
      ...this.state,
      inputValue: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    const newListItem = {
      name: this.state.inputValue,
      id: new Date().getTime(),
      completed: false 
    }
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newListItem]
    })
  }

  render() {
    return (
      <div className='App'>
        <TodoList todoItems={this.state.todoList} toggleCompleted={this.toggleCompleted} />
        <Form inputValue={this.state.inputValue} inputChange={this.inputChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
};
