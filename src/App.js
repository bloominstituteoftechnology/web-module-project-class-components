import React from 'react';
import TodoList from './components/TodoList';
import ToDoForm from './components/TodoForm';
import SearchBar from './components/SearchBar'
import styled from 'styled-components'

const StyledDiv = styled.div`
text-align:center;
border:1px solid black;
width:30%;
margin:auto;
.to-do-list{
  display:flex;
  flex-wrap:wrap;
}
.searchDiv{
  margin-bottom:5%;
}
#submitBtn{
  padding:5% 10%;;
  margin:4%;
  display:inline-block;
  background-color:green;
  cursor: pointer;
  :disabled{
    background:transparent;
    color:black;
    cursor: not-allowed;
  }
}
#deleteBtn{
  padding:5% 10%;;
  margin:4%;
  cursor: pointer;
  display:inline-block;
  background:red;
  color:yellow;
}
#inputForm{
  display:block;
  margin:6% auto;
  text-align:center;
}
`;


const array = [
  {
  task: 'do something',
  id: 12142,
  completed: false
},
{
  task: 'play on drums',
  id: 121414,
  completed: false
},
{
  task: 'clean the bathroom',
  id: 24214,
  completed: false
},
{
  task: 'go to the store',
  id: 1424214,
  completed: false
},
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDoArray:array,
      inputText:'',

    }

  }

  toggleToDo = (toDoId) =>{
    this.setState({
      toDoArray: this.state.toDoArray.map(item => {
        if (item.id === toDoId){
          return {
            ...item, completed:!item.completed,
          }
        }
        else {
          return item;
        }
      })
    }
    )
  };

  changeHandler = e =>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  };

  addItem = itemName =>{
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      toDoArray: [...this.state.toDoArray, newItem]
    })
  };

  submitHandler = e =>{
    e.preventDefault();
    this.addItem(this.state.inputText);
    this.setState({
      inputText:''
    })
  };
  
  deleteHandler = e =>{
    e.preventDefault();
    this.setState({toDoArray: this.state.toDoArray.filter(item => 
      item.completed === false)})
  }



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <StyledDiv>
        <h2>Welcome to your Todo App!</h2>
        <SearchBar/>
        <TodoList toDoArray={this.state.toDoArray} toggleToDo={this.toggleToDo}/>
        <ToDoForm inputText={this.state.inputText} changeHandler={this.changeHandler}
        submitHandler={this.submitHandler} deleteHandler={this.deleteHandler}/>
      </StyledDiv>
    );
  }
}

export default App;
