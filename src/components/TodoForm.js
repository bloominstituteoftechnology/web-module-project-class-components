import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input:''
        }
    }

    changeHandler = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        name='task'
                        placeholder='New Task'
                        onChange={this.changeHandler}
                    />
                </form>
                <button onClick={this.handleClick}>Add Task</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}



export default TodoForm;