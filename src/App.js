import React, {usestate} from 'react';
import ToDoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import ToDo from './components/Todo'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
        task: 'Take Normandy Beach',
        id: 'A1' ,
        completed: false
        },
    
        {
        task: 'Occupy Carentan',
        id: 'B2',
        completed: false
        },
    
        {
        task: 'Liberate Paris',
        id: 'C3',
        completed: false
        },
    
        {
        task: 'Help the Brits with the Hochwald Gap',
        id: 'D4',
        completed: false
        },
    
        {
        task: 'Enter Berlin',
        id: 'E5',
        completed: false
        }
    ],
    searched: [],
  };



// STATES //

const [ToDo, SetToDo] = useState(ToDo)
const [List, SetList] = useState(List)

const idNumber = 0;

addToDo = (newToDo) => {
  const newToDo = {
    task: newToDo,
    idNumber: {(idNumber + 1)},
    completed: false;
  };
  this.setState({ todos: [...this.state.todos, newToDo] });

}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div className = "container">
        <h2>Welcome to your Todo App!</h2>
          <TodoList/>
          <Todo/>
          <TodoForm/>
      </div>
    );
  }
}

export default App;
