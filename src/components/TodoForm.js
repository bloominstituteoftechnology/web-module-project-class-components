import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskText: '',
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.task]: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.taskText);
        this.setState({
            taskText: '',
        });
    };
    render () {
        return (
            <form className='todo-form' onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='taskText'
                    value={this.state.taskText}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}
export default TodoForm;