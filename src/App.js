import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const TodoData = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  },
  {
      task: 'Clean Room',
      id: 3,
      completed: false
    },
    {
      task: 'Pack Bags',
      id: 4,
      completed: false
    },
    {
      task: 'Do Homework',
      id: 5,
      completed: false
    },
    {
      task: 'Finish Work Project',
      id: 6,
      completed: false
    },
    {
      task: 'Binge watch shows',
      id: 7,
      completed: false
    },
    {
      task: 'Shower',
      id: 8,
      completed: false
    },
    {
      task: 'Do Laundry',
      id: 9,
      completed: false
    },
    {
      task: 'Go to the gym',
      id: 10,
      completed: false
    },
    {
      task: 'Ride Bikes',
      id: 11,
      completed: false
    },
    {
      task: 'Draw a picture',
      id: 12,
      completed: false
    },
    {
      task: ' Hot bubble bath',
      id: 13,
      completed: false
    },
    {
      task: 'Run errands',
      id: 14,
      completed: false
    },
    {
      task: 'Pull weeds from garden',
      id: 15,
      completed: false
    },
    {
      task: 'Assemble drawers',
      id: 16,
      completed: false
    },
    {
      task: 'Clean walls',
      id: 17,
      completed: false
    },
    {
      task: 'Walk dog',
      id: 18,
      completed: false
    },
    {
      task: 'Prepare dinner',
      id: 19,
      completed: false
    },
    {
      task: 'Pick up groceries',
      id: 20,
      completed: false
    },
    {
      task: 'Clean bathroom',
      id: 21,
      completed: false
    },
    {
      task: 'Take kids to Jiu Jitsu',
      id: 22,
      completed: false
    },
    {
      task: 'Paint kitchen',
      id: 23,
      completed: false
    },
    {
      task: 'Pick up new shoes',
      id: 24,
      completed: false
    },
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 state = {
   TodoData: TodoData,

 }

 //answer call to add item to list
 addItem = (item) => {
   console.log("we are adding a task");
   console.log(item, "item")
   this.setState({
    ...this.state,
    TodoData: [
      ...this.state.TodoData,
      {
        task: item,
        id: Date.now(),
        completed: false
      }
    ]
  })
}



 
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList TodoData = {this.state.TodoData} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addItem={this.addItem} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
