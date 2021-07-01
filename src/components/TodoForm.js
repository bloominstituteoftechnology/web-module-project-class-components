import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItemName: ''
        }
    }

    // Makes it so you can type in the input, also updates state.
    handleChanges = (e) => {
        this.setState({ newItemName: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.state.newItemName
        this.props.addItem(this.state.newItemName)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* Value is linked to the state. */}
                <input onChange={this.handleChanges} value={this.state.newItemName} type="text" name="item" />
                <button>TodoForm Class Component.</button>
            </form>
        );
    }
}

export default TodoForm;