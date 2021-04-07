import React, { Component } from 'react'

export class TodoForm extends Component {
    
    constructor() {
        super();
        this.state = {
            obj: ''
        }
    }

    handleChange = (e) => {
        this.setState({ obj: e.target.value })
    }

    submitObj = (e) => {
        e.preventDefault();
        this.setState({ obj: '' });
        this.props.addObj(this.state.obj, e)
    }

    render() {
        return (
            <form onSubmit={this.submitObj} >
                <input 
                type= 'text'
                name='obj'
                value={this.state.obj}
                onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm
