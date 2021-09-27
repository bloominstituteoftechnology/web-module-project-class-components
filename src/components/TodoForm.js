import React, { Component }from "react";

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({
            input:e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
    }
    render() {
        return(
            <form>
                <input onChange={this.handleChanges} type='text' name='item' />
                <button onClick={this.handleSubmit}>Add</button>
                <button onClick={this.props.handleClear}>Clear</button>
            </form>
        );
    }
}

export default TodoForm;