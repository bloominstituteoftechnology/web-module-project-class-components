import { render } from '@testing-library/react';
import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            todo: ""
        };
    }


handleChanges = e =>{
  //update state with each keystroke
  this.setState({todo: e.target.value})
};

handleSubmit = e =>{
  e.preventDefault();
  this.props.addTodo(this.state.todo);
  this.setState({
    todo: ""
  })
}
handleClear = e => {
  e.preventDefault();
  this.props.clearCompleted();
}

render(props) {
return(
    <form className="form">
    <input
    className="input"
      type="text"
      name="todo"
      placeholder="Add a Todo"
      value= {this.state.todo} //adding this "value" and the event handler below turns this into a controlled component
      onChange= {this.handleChanges}
    />
    <button className= "btn" onClick={this.handleSubmit}>Add Todo</button>
    <button className= "btn" onClick={this.handleClear}>Clear Completed</button>
  </form>
)

}
}
export default TodoForm