import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChnages = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChnages} type='text' name='item' />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;