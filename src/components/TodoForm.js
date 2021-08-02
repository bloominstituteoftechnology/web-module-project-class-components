import React, { Component } from 'react'

class TodoForm extends Component {
    constructor () {
        super()
        this.state = {
            formValue: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            formValue: e.target.value
        })
    }

    handleAdd = (e) => {
        e.preventDefault();
        this.props.handleAddTask(this.state.formValue)
        this.setState({
            ...this.state,
            formValue: ''
        })
    }

    handleClear = (e) => {
        e.preventDefault();
        this.props.handleClearComplete()
    }

    render(){
        return (
            <div>
                <form>
                    <input name='task' onChange={this.handleChange} value={this.state.formValue} />
                    <button onClick={this.handleAdd}>Add task</button>
                    <button onClick={this.handleClear}>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm