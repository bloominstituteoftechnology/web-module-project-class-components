import React from "react"

class TodoForm extends React.Component {

    constructor() {
        super()
        this.state={
            name: ''
        }
    }

    // Need to change based off of todoInput

    changeState = (event) => {
        this.setState({name:event.target.value})
    }


    // Need to submit based off of todoInput

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state.name)
        this.setState({name:''})
    }
    
    
    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor={'todoInput'}>Name of Task: </label>
                <input 
                    type="text"
                    name="todoName"
                    placeholder="placeholder..."
                    id="todoInput"
                    onChange={this.changeState}
                    value={this.state.name}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm