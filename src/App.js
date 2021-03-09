import React from 'react';
import TodoList from './components/TodoList'
import ToDoForm from './components/TodoForm'
import styled from 'styled-components';

const toDo = [
  {task: 'Homework' , id: 1 ,completed: false},
  {task: 'Clean' , id: 2 ,completed: false},
  {task: 'Cook Dinner' , id: 3 ,completed: false},
  {task: 'Play Xbox' , id: 4 ,completed: false}
]

const Appstyl =styled.div`
height:100vh;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
border:5px solid black;
`


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDo: toDo,
    };
  }

  toggleItem = (clickedonId) => {
    this.setState({
      toDo: this.state.toDo.map((item) => {
        if(item.id === clickedonId ) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      toDo: [...this.state.toDo, newItem],
    });
  };

  clearItem = () => {
    this.setState({
      toDo: this.state.toDo.filter(task => !task.completed)
    })
  }  

  render() {
    return (
      <Appstyl>
        <h2>Get It Done!</h2>
        <ToDoForm addItem= {this.addItem}/>
        <TodoList 
          toggleItem={this.toggleItem}
          toDo={this.state.toDo}
          clear={this.clearItem}
        />
      </Appstyl>
    );
  }
}

export default App;
