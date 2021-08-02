/**
 * Tom Bielawski
 * Lambda School WEB45 3.1.1
 * React to-do
 * 08/02/2021
 */

//Import statements
import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';

/* 
you will need a place to store your state in this component.
Design `App` to be the parent component of your application.
This component is going to take care of state, and any change
handlers you need to work with your state */

//Declare the list of objects
const list = 
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },

  {
    task: "Drive car",
    id: 1002,
    completed: false,
  },

  {
    task: "Breathe",
    id: 1003,
    completed: false,
  },

  {
    task: "Look Both Ways Before Crossing the Street",
    id: 1004,
    completed: false,
  },

];

//Class definition
class App extends React.Component 
{

  constructor() 
  {
    super();
    this.state = 
    {
      list:list
    };
  }

  //Add task function
  handleAddItem = (task) => 
  {
    //Declare the item
    const newItem = 
    {
      task: task,
      id: Date.now(),
      completed: false
    }
    
    //Set the state
    this.setState
    ({
      list: [...this.state.list, newItem]
    })
  }

  //HandleItemToggle maps over items, searches for any items completed
  handleLists = (id) => 
  {

    this.setState
    ({
      //For every item in list array,
      list: this.state.list.map(item =>  
      {
        //Compare item.id to item
        if (item.id === id) 
        {
          //spread in item
          return ({
            ...item,
            completed: !item.completed
          });
        }
        //Return the list item
        return item;
      })
    });
  }

  //Clear the completed items
  handleClear = () =>
  {
    this.setState
    ({
      ...this.state,
      list: this.state.list.filter(item =>  {return(item.completed === false);})
    });
  }


  //Render and return
  render() {
    return (
      <div>
        <TodoForm 
        handleAddItem = {this.handleAddItem}/>

        <TodoList 
        handleClear = {this.handleClear} 
        handleLists = {this.handleLists} 
        list = {this.state.list}/>

      </div>
    );
  }
}

export default App;