import React from 'react';

class ToDoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            newTask: e.target.value
        })
        
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({
            ...this.state,
            newTask: ''
        })
    }

    render() {
        return (
        <form>
            <input type = 'text' name = 'task' value = {this.state.newTask} onChange = {this.handleChanges}/>
            <button onClick = {this.handleSubmit}>Add Task</button>
        </form>
        )
    }

}

export default ToDoForm;