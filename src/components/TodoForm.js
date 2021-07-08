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

    handleClick = () => {
        this.props.handleCompletedTasks()
    }
    render() {
    return (
        <div>
            <form onSubmit={this.onSubmitHandler}>
                <input type='text' placeholder='add todo' onChange={this.inputChangeHandler} value={this.state.inputValue}/>
                <button>add to todo list</button>
               </form> 
            <button onClick={this.handleClick}>clear completed</button>
            
        </div>
    )
    }
}

export default TodoForm