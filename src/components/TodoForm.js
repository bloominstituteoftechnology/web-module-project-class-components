import { render } from '@testing-library/react'
import React from 'react'

class TodoForm extends React.Component {

    constructor() {
    super()
    this.state = {
        inputValue: ''
    }
}

handleChanges = e => {
    this.setState({
        inputValue: e.target.value,
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleTaskAdd(this.state.inputValue)
    this.setState({
        inputValue: '',
    })
}

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChanges} type='text' name='task' value={this.state.inputValue} />
            <button>Add</button>
        </form>
    )
}
}

export default TodoForm 