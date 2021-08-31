import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
        };
    }
     
    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
    }

    handleClick = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
    }
    
    render() {
        return ( 
            <form>
                <input
                type='text'
                name='task'
                onChange={this.handleChanges}
                placeholder='...todo'
                value={this.state.input}
                minLength={2}
                />
                <button
                onClick={this.handleClick}
                >Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;