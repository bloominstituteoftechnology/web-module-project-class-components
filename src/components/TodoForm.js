// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.handleAdd(this.state.input)
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <input 
                    type='text' 
                    name='todo'
                />
                <button >Add</button>
            </form>
        )
    }
}
export default TodoForm