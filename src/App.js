import React from 'react';


import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


// ??? How are all these components working together ???
// ??? not sure why this was in components folder as a component ???
import './components/Todo.css';

// todos var will be a prop to pass & dummy data to test
const todos = [
  {
    task: 'Complete Project MVP',
    id: 1528817077285,
    completed: false

  },
  {
    task: 'Submit Quiz',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Submit Check for Understanding',
    id: 1528817077287,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Constructor state
  constructor() {
    super(); // ???why is this depreciated???
    // Application level state, to be shared with components as props
    this.state = {
      todos:todos

    }
  }

  // toggle finished 
  // ?? not sure where itemId comes from
  toggleFinished = (itemId) => {
    // conosle.log working & passing the itemId, not sure how it's doing that ???, but it is
    console.log("toggling finished tasks", itemId);
    // map thru the array
    // when the item matches the one clicked, toggle its completed flag
    // otherwise, don't make any changes
    const updatedTodoList = this.state.todos.map(item => {
      // Logic walk through
      // if item.id === itemId, toggle completed flag
      // else, return item
      // ??? IDK this doesn't seem to be doing anything ???
      if (item.id === itemId) {
        return {...item, completed: !item.completed};
      }
      else {
        return item;
      }  
    });
    // logic check : Yay! it's hitting
    console.log("updated todo list:", updatedTodoList);
    // updating state
    this.setState({
      ...this.state,
      todos: updatedTodoList
    });
  
  }

  // bringing in props from TodoForm
  // remember to pass this down to your render
  addItem = (newItem) => {
    // this console is working :)
    console.log("Adding a new task:", newItem);
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        {
          name: newItem,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  clearCompleted = () => {
    // ??? this console.log doesn't seem to be working ???
    console.log("clearing completed tasks");
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoForm addItem={this.addItem} />
        <TodoList 
          // passes original state variables
          todos={this.state.todos} 
          // updates state varibles on toggle function
          toggleFinished={this.toggleFinished}
          clearCompleted={this.clearCompleted}
        />
      </div>
      
    );
  }
}

export default App;
