import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' }
    }
    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }
    render() { 
        return ( <form action="submit"  onSubmit={this.props.addTodo}>
            <input type="text" onChange={this.handleChange} value={this.state.inputValue} placeholder="Task description" />
            <button type="submit" className="btn waves-effect waves-light" >Add Task</button>
        </form> );
    }
}
 
export default TodoForm;