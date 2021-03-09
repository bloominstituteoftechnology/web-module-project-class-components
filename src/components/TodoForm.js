import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            taskText: '',
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskText);
        this.setState({
            taskText: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='taskText' value={this.state.taskText} onChange={this.handleChanges} />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;