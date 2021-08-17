import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTodo: ''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            newTodo: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
    }

    render(){
        return(
            <form>
                <input type="text" task="todo" value={this.state.newTodo} onChange={this.handleChanges}/>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;