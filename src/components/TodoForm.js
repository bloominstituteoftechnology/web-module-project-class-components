import React from 'react'

class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }

    handleChanges = e => {
    // update state with each keystroke
        this.setState({
            ...this.state,
            newTask: e.target.value
        });
    };

    // class property to submit form
    handleSubmit = e => { 
        e.preventDefault();
        // update app component with new task to add
        this.props.addTask(this.state.newTask)
    }


    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    name ='todo' 
                    placeholder='add task...'
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}
export default TodoForm