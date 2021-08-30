import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = event => {
        this.setState({
            input: event.target.value
        });
    };

    handleClick = event => {
        event.preventDefault();
        this.props.handleAdd(this.state.input);
        this.setState({input: ''})
    }

    render() {
        return(
            <form>
                <input 
                type='text' 
                name='task' 
                onChange={this.handleChanges}
                placeholder='add task'
                value={this.state.input}
                />
                
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }


}

export default TodoForm;