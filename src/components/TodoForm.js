import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input:""
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const input = this.state.input;
        this.props.addItem(input);
        this.setState({
            input:""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChanges} type="text" name="item" placeholder="add todo..."/>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;