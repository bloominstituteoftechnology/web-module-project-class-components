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
        // console.log(e.target.value)
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
            <form >
                <input 
                    type='text' 
                    name='item'
                    onChange={this.handleChanges}
                />
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }
}
export default TodoForm