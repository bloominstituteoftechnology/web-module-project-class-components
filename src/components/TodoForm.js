import { render } from '@testing-library/react';
import React, {Component} from 'react';

export class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            todo: ""
        };
    }


handleChanges
handleSubmit
handleClear

render(props) {
return(
    <form className="form">
    {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
    <input
    className="input"
      type="text"
      name="todo"
      placeholder="Add a Todo"
      value= {this.state.todo}
      onChange= {this.handleChanges}
    />
    <button className= "btn" onClick={this.handleSubmit}>Add Todo</button>
    <button className= "btn" onClick={this.handleClear}>Clear Completed</button>
  </form>
)

}
}