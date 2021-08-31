import React from 'react';
import styled from 'styled-components'

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks =[{
  task: "Tester",
  id: Date.now(),
  completed: false,
}
]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

//Feature 1: Toggle task to be complete or incomplete
toggleComplete = (id) => {
  this.setState({
    ...this.state,
    tasks: this.state.tasks.map((task)=> {
      if (task.id === id) {
        return({
            ...task,
            completed: !task.completed
          });
      } else {
        return(task);
      }
    })
  });
}

//Feature 2: Add an task to Todolist
handleAdd = (task) => {
  const newTasks = {
    task: task,
    id: Date.now(),
    purchased: false
  };

  this.setState({
    ...this.state,
    tasks: [...this.state.tasks, newTasks]
  });
}

//Feature 3: Clear all tasks
handleClear = () => {
  this.setState({
    ...this.state,
    tasks: this.state.tasks.filter((item)=> {
      return(item.completed === false);
    })
  });
}


  render() {
    return (
      <BodyStyle>
        <div className='todo-container'>
        <h2>Todo List</h2>
        <h3>Create a task, click it when complete. Simple!<span role='img' aria-label="Happy">😄</span><br/> 
        Clear list when all tasks are complete, or a refresh is needed.</h3>
        <TodoForm handleAdd={this.handleAdd}/>
        <TodoList tasks={this.state.tasks} handleClear={this.handleClear} toggleComplete={this.toggleComplete}/>
        </div>
      </BodyStyle>
    );
  }
}

export default App;

const BodyStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: 100%;

.todo-container{
  h2{
    color: #ffaa00;
    letter-spacing:15%;
    font-size: 3rem;
    margin:2%;
    text-decoration: underline #ffaa00;
    text-shadow: 0 0 5px #d500af;
    font-family: 'Cantarell', sans-serif;

  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: auto;
  background-color: rgba(240,240,240, 0.6);
  border-radius: 3rem;
  box-shadow:inset 0 0 20px #ffaa00;
}
.todo-container:hover{
  box-shadow: 0 0 30px #0084ff,
   inset 0 0 20px #8100ff;
}
`

   // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state