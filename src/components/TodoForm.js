import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
        }
    }

handleChanges = (event) => {
    this.setState({
        inputValue: event.target.value
    })
}
handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleAddTask(this.state.inputValue)
    this.setState({
        inputValue: '',
    })
}

render() {
    return (
        <form onSubmit = {this.handleSubmit}>
            <input
                onChange = {this.handleChanges}
                type = 'text'
                name ='todo'
                value = {this.state.inputValue}
            />
            <button>Add Task</button>
        </form>
    )
  }
}
export default TodoForm