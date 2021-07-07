import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    inputChangeHandler = (e) => {
        this.setState({inputValue: e.target.value})
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.handleAddTask(this.state.inputValue)
        this.setState({inputValue: ''})
    }
    render() {
    return (
        <div>
            <form onSubmit={this.onSubmitHandler}>
                <input type='text' placeholder='add todo' onChange={this.inputChangeHandler} value={this.inputValue}/>
                <button>add to todo list</button>
                <button>clear completed</button>
            </form>
        </div>
    )
    }
}

export default TodoForm