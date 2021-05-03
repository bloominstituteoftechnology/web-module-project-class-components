import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChange = evt => {
        this.setState({
            input: evt.target.value
        });
    };

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addTask(this.state.input);
    }

    handleComplete = () => {
        this.props.completeTask()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type='text' name='task'/>
                <button>Add Task</button>
                <button onClick={this.handleComplete}>Complete Task</button>
            </form>
        )
    }
}

export default TodoForm