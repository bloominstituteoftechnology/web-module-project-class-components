import React from 'react'

class TodoForm extends React.Component {
    // create a constructor with state
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    // handle any changes with state
    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    };

    // class property to submit form
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddItems(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type='text' name='item'  />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;