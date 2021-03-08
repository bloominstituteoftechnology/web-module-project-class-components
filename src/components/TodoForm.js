import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            itemText: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.itemText);
        this.setState({
            itemText: '',
        });
    };

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type = 'text'
                    name = 'itemText'
                    value = {this.state.itemText}
                    onChange = {this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm