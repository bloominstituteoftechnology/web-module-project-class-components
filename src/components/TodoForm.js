import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleChanges = event => {
        this.setState({
            ...this.state,
            input: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleAddItem(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type='text' name='item' value={this.state.input} />
                <button>Add</button>
            </form>
        )
    }
}
export default TodoForm