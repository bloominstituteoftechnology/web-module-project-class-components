import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import App from './App';
import styled from 'styled-components';

const StyledIndex = styled.div`

    display:flex;
    flex-direction:row;
    justify-content:center;
    h2{
        display:flex;
        flex-direction:row;
        justify-content:center;
        background-color:lightgreen;
        border-radius:10px;
    }
`

const task = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];
  
  class App2 extends React.Component {

      constructor() {
          super();
          this.state = {
              task: task
          }
      }

        ToggleComplete = (id) => {
          this.setState({
              ...this.state,
              task: this.state.task.map((action)=> {
                  if(action.id === id){
                      return({
                          ...action,
                          completed: !action.completed
                      });
                  } else {
                      return(action);
                  }
              })
          });
      }

      add = (task) => {
          const newTask = {
              task: task,
              id: Date.now(),
              completed: false
          };

          this.setState({
              ...this.state,
              task: [...this.state.task,
            newTask]
          });
      }

      clear = () => {
          this.setState({
              ...this.state,
              task: this.state.task.filter((item) => {
                  return(item.completed === false)
              })
          });
      }

      render() {
          return (
              <StyledIndex>
              <div className='App' >
                  <App />
                  <div className='header'>
                      <h2>Todo List</h2>
                      <TodoForm Add={this.add}/>
                  </div>
                  <TodoList Clear={this.clear}
                  ToggleComplete={this.ToggleComplete} task={this.state.task} />
              </div>
              </StyledIndex>
          );
      }
  }

ReactDOM.render(<App2 />, document.getElementById('root'));
