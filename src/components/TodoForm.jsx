import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' }
    }
    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = this.state.inputValue;
        this.props.addTodo(e, newTask)
        this.setState({inputValue: ''})
    }
    render() { 
        return ( <form action="submit"  onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.inputValue} placeholder="Task description" />
            <button type="submit" className="btn waves-effect waves-light" >Add Task</button>
        </form> );
    }
}
 
export default TodoForm;