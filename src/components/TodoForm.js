import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input:''
        }
    }

    handleChanges = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleAddClick = event => {
        event.preventDefault();
        this.props.handleAdd(this.state.input)
        this.setState({
            input:''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text' 
                        name='task'
                        onChange={this.handleChanges}
                        placeholder='add a task...'
                        value={this.state.input}
                    />
                </form>
                    <button onClick={this.handleAddClick}>Add Task</button>
                    <button onClick={() => this.props.handleClear()}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;