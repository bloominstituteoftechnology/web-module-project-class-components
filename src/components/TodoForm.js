import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
    }

    handleChanges = e => {
        this.setState({
            inputValue: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleAddItem(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} value={this.state.inputValue} type="text" name="item" />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;