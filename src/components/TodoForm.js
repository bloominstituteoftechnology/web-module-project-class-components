import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(){
    super()
    this.state={
        todoText:"",

    }
}


handleChanges = event =>{
    const { name, value } = event.target;
    this.setState({
        [name]: value,

    })

}

handleSubmit = event =>{
    event.preventDefault();
    this.props.addItem(this.state.todoText)
    this.setState({
        todoText:"",
    });
    
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo-input">Add Todo:</label>
           <input id="todo-input" name="todoText" value={this.state.todoText} onChange={this.handleChanges}/> 
           <button onChange={this.handleSubmit}>Add to list</button>
           

        </form>
        )
    }
}
