import React from 'react';
import ToDoList from '../src/components/ToDoList'
import TodoForm from '../src/components/TodoForm'

const hardCodedNotes = [
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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { notes: hardCodedNotes }           // Creates a state with the key notes, which represents the hard coded array of objects.
    // console.log(this.state.notes) // shows Arr num, then if traversed, shows the 3 key value pairs.
  }

  // This combines the 2 states that are created on two different class components. 
  addItem = (formStateEmptyString) => {              // In class components arrow functions do not need "const"
    this.setState({ notes: [...this.state.notes,     // We are copying the existing state, and adding one more item onto it.
      {
        task: formStateEmptyString,                  // This new object needs to have the same keys as the previous object.
        id: Date.now(),                              // Creates a unique number based on micro-seconds.
        completed: false                             // Boolean for a toggle.
      }]
    })
  }

  // The Boolean toggler! (Passed into Todo.js via props.)
  // (itemId) is being passed in as an argument from Todo.js. It is simply the ID of each item/object.
  toggleItem = (itemId) => {                    // itemId = all items Id's
    this.setState({
      notes: this.state.notes.map((item) => { // Iterating every item in state.
        if(item.id === itemId) {              // ItemId is whatever item.id is being clicked on in the Todo.js file.
          return {                            // Return this if true.
            ...item,                          // Returns a new object. Spreads all values of existing item/object, with 1 change. 
            completed: !item.completed        // This is the change! This toggles the Boolean by returning the opposite.
          }                                   // If completed: is false, then !item.completed = not false. If completed: is true, then !item.completed = not true.
        }
        return item;                          // Otherwise return this. 
      })
    })
  }

  // Clear Completed Button
  // With filter, all true remains in the function. All false is filtered out. Creates a new array of all true's.
  clearCompleted = () => {
    this.setState({
      notes: this.state.notes.filter((item) => { 
        return !item.completed                   // Returns true for all items not completed, and false for all items completed.
      })
    })
  }

  render() {
    return (
      <div>
        <TodoForm addItem={this.addItem} />          {/* Displays input field and add button to the browser. */} 
        <ToDoList clearCompleted={this.clearCompleted} notes={this.state.notes} toggleItem={this.toggleItem}/>        {/* Displays Hard coded and submitted text onto the browser. */}

      </div>
    );
  }
 }



