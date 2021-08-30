import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
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

    handleClearClick = () => {
        this.handleClear();
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
                    <button onClick={this.handleClearClick}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;