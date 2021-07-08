import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
    };

    handleChanges = (e) => {
        this.setState({
            input: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.input)
    };

    render() {
        return(
            <form>
                <input onChange={this.handleChanges} type="text" name="item"/>
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm 