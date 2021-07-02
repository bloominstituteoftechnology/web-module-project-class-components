import React, { Component } from 'react'

export class TodoForm extends Component {

    clickHandler = event => {
        event.preventDefault();
        console.log("I am here ", event.type); // this is the react Synthetic Event
        
      };
    render() {
        return (
            <div>
                <form> 
                Name :
                <input type="text" placeholder="first name" />
                <button onClick={this.clickHandler}>Click Me</button>
            </form>
            </div>
        )
    }
}

export default TodoForm
